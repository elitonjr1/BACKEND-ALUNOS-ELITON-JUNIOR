import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessageHelper } from "src/helpers/messages_helper";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateAlunoDto {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()    
    data_nascimento: Date

    @IsNotEmpty() 
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: MessageHelper.PASSWORD_VALID})
    senha: string;
}

