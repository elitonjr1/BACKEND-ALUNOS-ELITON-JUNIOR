import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from "dotenv";
import { Aluno } from './aluno/entities/aluno.entity';
import { enteties } from './enteties';
import { modules } from './modules';


config()
@Module({
  imports: [TypeOrmModule.forRoot({
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    type: "postgres",
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    synchronize: false,    
    entities: [...enteties]
  }), ...modules,],
  controllers: [],
  providers: [],
})
export class AppModule {}
