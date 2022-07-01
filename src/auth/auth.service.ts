import { Injectable } from '@nestjs/common';
import { AlunoService } from 'src/aluno/aluno.service';
import { Aluno } from 'src/aluno/entities/aluno.entity';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly alunoService: AlunoService, private readonly jwtService: JwtService) { }

    async login(user) {
        const payload = { sub: user.id, email: user.email }

        return {
            token: this.jwtService.sign(payload),
        }
    }

    async validateUser(email: string, senha: string) {
        /*let user: Aluno

        try {            
            user = await this.alunoService.findOneByEmail(email);            
        } catch (error) {
            return null;
        }

        const isPasswordValid = compareSync(senha, user.senha);

        if (!isPasswordValid) return null;

        return user;*/

        const user = await this.alunoService.findOneByEmail(email);

        if ( user && user.senha === senha) {
           return user;
        }

        return null;

    }
}
