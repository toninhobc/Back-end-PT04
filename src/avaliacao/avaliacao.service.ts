import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto) {
    const avaliacao = await this.prisma.avaliacao.create({
      data: data,
    });
    return avaliacao;
  }

  // Método para retornar todas as avaliações
  async findAll() {
    // Lógica para buscar todas as avaliações (simulação ou integração com banco de dados)
    return await this.prisma.avaliacao.findMany();
  }

  // Método para buscar uma avaliação específica pelo ID
  async findAvaliacao(id: number) {
    // Lógica para buscar a avaliação pelo ID
    return await this.prisma.avaliacao.findUnique({
      where: {
        id: id,
      },
    });
  }

  async deleteAvaliacao(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({
      where: { id },
    });
    
    if (!avaliacao) {
      throw new NotFoundException(`Avaliacao with ID ${id} not found`);
    }
      return await this.prisma.avaliacao.delete({
        where: { id },
      });
    }

  async updateAvaliacao(id: number, data: UpdateAvaliacaoDto) {
    return await this.prisma.avaliacao.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
