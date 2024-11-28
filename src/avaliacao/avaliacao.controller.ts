import { Controller, Post, Body, ValidationPipe, Get, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { AvaliacaoService } from './avaliacao.service';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto) {
    return await this.avaliacaoService.create(avaliacaoData); 
  }

  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  @Get(':id')
  async findAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAvaliacao(id);
  }

  @Delete(':id')
  async deleteAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.deleteAvaliacao(id);
  }

  @Patch(':id')
  async updateAvaliacao(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: UpdateAvaliacaoDto) {
    return await this.avaliacaoService.updateAvaliacao(id, data);
  }
}