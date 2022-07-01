import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoDto } from './dto/update-inscricao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscricao } from './entities/inscricao.entity';

@Injectable()
export class InscricaoService {

  constructor(
    @InjectRepository(Inscricao)
    private readonly inscricaoRepository: Repository<Inscricao>
  ) { }

  async create(createInscricaoDto: CreateInscricaoDto) {
    return await this.inscricaoRepository.save(createInscricaoDto);
  }

  async createInscricao (createInscricaoDto: CreateInscricaoDto){

    const alunoJaEscrito = await this.inscricaoRepository.manager.query('SELECT * FROM INSCRICAO I WHERE I.ID_ALUNO = $1 AND I.ID_CURSO = $2 AND DATA_CANCELAMENTO IS NULL', [createInscricaoDto.id_aluno, createInscricaoDto.id_curso]);    
    
    if (alunoJaEscrito == false){
      return await this.inscricaoRepository.save(createInscricaoDto);
    }else {
      throw new BadRequestException('Usuário ja cadastrado nesse curso');
    }
  }

  async findAll() {
    return await this.inscricaoRepository.find();
  }  

  async removerInscricao(id: number) {
    return await this.inscricaoRepository.manager.query('UPDATE INSCRICAO SET DATA_CANCELAMENTO = CURRENT_DATE WHERE ID = $1', [id]);
  }

  async update(id: number, updateInscricaoDto: UpdateInscricaoDto) {
    return this.inscricaoRepository.update(id, updateInscricaoDto);
  }
}
