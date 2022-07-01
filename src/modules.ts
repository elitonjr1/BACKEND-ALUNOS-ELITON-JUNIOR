import { AlunoModule } from "./aluno/aluno.module";
import { AuthModule } from "./auth/auth.module";
import { CursoModule } from "./curso/curso.module";
import { InscricaoModule } from "./inscricao/inscricao.module";

export const modules = [
    AlunoModule,
    AuthModule,
    CursoModule,
    InscricaoModule
]