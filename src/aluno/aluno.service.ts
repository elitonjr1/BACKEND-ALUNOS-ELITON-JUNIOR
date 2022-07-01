import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {

  constructor(
    @InjectRepository(Aluno)
    private readonly alunoPostRepository: Repository<Aluno>
  ) { }

  async create(createAlunoDto: CreateAlunoDto) {
    return await this.alunoPostRepository.save(createAlunoDto);
  }

  async findAll() {
    return await this.alunoPostRepository.find({
      select: ['id', 'nome', 'email', 'data_nascimento'],
    });
  }

  async findOne(id: number) {
    try {
      return await this.alunoPostRepository.findOneById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneByEmail(email: string): Promise<Aluno | undefined> {
    try {
      return await this.alunoPostRepository.findOneBy({ email })
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.alunoPostRepository.update(id, updateAlunoDto);
  }

  async remove(id: number) {
    return await this.alunoPostRepository.delete(id);
  }
}
