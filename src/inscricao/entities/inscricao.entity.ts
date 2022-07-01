import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inscricao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_aluno: number;

    @Column()
    id_curso: number;

    @CreateDateColumn()
    data_inscricao: Date;

    @CreateDateColumn()
    data_cancelamento: Date;
}
