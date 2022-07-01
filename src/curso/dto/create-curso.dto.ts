import { IsNotEmpty, IsOptional } from  "class-validator";

export class CreateCursoDto {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    data_inicio: Date;

    @IsOptional()
    ind_ativo: number;
    
}
