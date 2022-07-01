import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/aluno')

export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    return await this.alunoService.create(createAlunoDto);
  }

  
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.alunoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number) {
    return await this.alunoService.findOne(id);
  }

  @Get('email/:email')
  @UseGuards(AuthGuard('jwt'))
  async findOneByEmail(@Param('email') email: string) {
    return await this.alunoService.findOneByEmail(email);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() updateAlunoDto: UpdateAlunoDto) {
    return await this.alunoService.update(id, updateAlunoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: number) {
    return await this.alunoService.remove(id);
  }
}
