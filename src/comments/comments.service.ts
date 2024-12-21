import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  // Create
  async create(data: CreateCommentsDto) {
    const comment = await this.prisma.comentarios.create({
      data: data,
    });
    return comment;
  }

  // Read
  async findAll() {
    return await this.prisma.comentarios.findMany();
  }

  async findComment(id: number) {
    return await this.prisma.comentarios.findUnique({
      where: {
        id: id,
      },
    });
  }

  // Update
  async update(id: number, data: UpdateCommentsDto) {
    return await this.prisma.comentarios.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  // Delete
  async delete(id: number) {
    const comment = await this.prisma.comentarios.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
      return await this.prisma.comentarios.delete({
        where: { id },
      });
    }
}
