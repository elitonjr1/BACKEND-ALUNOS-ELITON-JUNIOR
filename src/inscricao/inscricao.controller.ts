import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InscricaoService } from './inscricao.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoDto } from './dto/update-inscricao.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/inscricao')
@UseGuards(AuthGuard('jwt'))
export class InscricaoController {
  constructor(private readonly inscricaoService: InscricaoService) {}

  @Post()
  async create(@Body() createInscricaoDto: CreateInscricaoDto) {
    return await this.inscricaoService.create(createInscricaoDto);
  }

  @Post('cadastrar')
  async createInscricao(@Body() createInscricaoDto: CreateInscricaoDto) {
    return await this.inscricaoService.createInscricao(createInscricaoDto);
  }

  @Get()
  async findAll() {
    return await this.inscricaoService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateInscricaoDto: UpdateInscricaoDto) {
    return await this.inscricaoService.update(id, updateInscricaoDto);
  }

  @Patch('removerInscricao/:id')
  async removerInscricao(@Param('id') id: number){
    return await this.inscricaoService.removerInscricao(id);
  }
  
}
