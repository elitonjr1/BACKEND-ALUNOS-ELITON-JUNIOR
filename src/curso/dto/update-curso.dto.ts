import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoDto } from './create-curso.dto';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {
    nome: string;
    data_inicio: Date;
    ind_ativo: number;

}
