import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {

  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>
    ) { }

  async create(createCursoDto: CreateCursoDto) {
    return await this.cursoRepository.save(createCursoDto);
  }

  async findAll() {
    return await this.cursoRepository.find();
  }

  async findAllCursosAtivos() {
    //const cursos = this.cursoRepository.createQueryBuilder("curso").select("nome, ind_ativo, data_inicio").where("curso.ind_ativo = :ind_ativo AND curso.data_inicio > CURRENT_DATE", {ind_ativo: 1}).getRawMany();

    const cursos = await this.cursoRepository.manager.query('SELECT NOME, IND_ATIVO, DATA_INICIO, (SELECT COUNT(*) FROM INSCRICAO I WHERE I.ID_CURSO = C.ID) AS QTD_INSCRICOES FROM CURSO C WHERE C.IND_ATIVO = 1 AND C.DATA_INICIO > CURRENT_DATE');

    return cursos;
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return await this.cursoRepository.update(id, updateCursoDto);
  }

  async remove(id: number) {
    return await this.cursoRepository.delete(id);
  }
}
