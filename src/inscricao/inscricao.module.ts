import { Module } from '@nestjs/common';
import { InscricaoService } from './inscricao.service';
import { InscricaoController } from './inscricao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscricao } from './entities/inscricao.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscricao])
  ],
  controllers: [InscricaoController],
  providers: [InscricaoService],
  exports: [InscricaoService]
})
export class InscricaoModule {}
