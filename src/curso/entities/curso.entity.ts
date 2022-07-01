import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    data_cadastro: Date;

    @Column()
    ind_ativo: number;

    @CreateDateColumn()
    data_inicio: Date;

}
