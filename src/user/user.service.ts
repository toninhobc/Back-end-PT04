import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw new ConflictException('Este e-mail já está sendo usado.');
    }
    
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    
    return await this.prisma.user.create({
      data: {
        ...data,
        senha: hashedPassword,
      },
    });
  }
  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        nome: true,
        departamento: true,
        curso: true,
        createdAt: true,
        updatedAt: true,
        posts: true,
      },
    });
  }

  async findUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nome: true,
        createdAt: true,
        updatedAt: true,
        posts: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return await this.prisma.user.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        nome: true,
        createdAt: true,
        updatedAt: true,
        posts: true,
      },
    });
  }
  
  //update não funciona sem o senha
  async update(id: number, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with this ID not found`);
    }

    const updateData: any = { ...data };
     if (data.senha) { 
      const hashedPassword = await bcrypt.hash(data.senha, 10); 
      updateData.senha = hashedPassword; } 
      else { delete updateData.senha; } 
      return await this.prisma.user.update({ 
        where: { id }, 
        data: updateData, 
        select: { 
          id: true, email: true, nome: true, createdAt: true, updatedAt: true, posts: true, }, });
  }
  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return null;
    }
    
    return user;
  }
}
