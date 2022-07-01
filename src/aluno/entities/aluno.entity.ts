import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcrypt"

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    data_nascimento: Date;

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    data_registro: Date;

    @CreateDateColumn()
    data_cancelamento: Date;

    @BeforeInsert()
    hashPassword(){
        this.senha = hashSync(this.senha, 10);
      }
}
