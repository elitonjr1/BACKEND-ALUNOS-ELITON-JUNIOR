import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/curso')
@UseGuards(AuthGuard('jwt'))
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()  
  async create(@Body() createCursoDto: CreateCursoDto) {
    return await this.cursoService.create(createCursoDto);
  }

  @Get()
  async findAll() {
    return await this.cursoService.findAll();
  }

  @Get("buscar")
  async findAllCursosAtivos() {
    return await this.cursoService.findAllCursosAtivos();
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCursoDto: UpdateCursoDto) {
    return await this.cursoService.update(id, updateCursoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.cursoService.remove(id);
  }
}
