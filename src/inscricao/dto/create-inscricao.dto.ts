import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class CreateInscricaoDto {    
    @IsNotEmpty()
    id_aluno: number;

    @IsNotEmpty()
    id_curso: number;
}
