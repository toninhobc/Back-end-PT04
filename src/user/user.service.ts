import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.creat({
        data: data,
    });
    return user;
  }
  async findAll(){
    return await this.prisma.user.findMany();
  }

  async findUser(id: number){
    return await this.prisma.user.findUnique({ 
        where: { 
            id: id, } });
  }
  async deleteUser(id: number){
    return await this.prisma.user.delete({ 
        where: { 
            id: id, } 
        });
  }
  async update(id: number, data: UpdateUserDto){
    return await this.prisma.user.update({
        where:{
            id:id,
        },
        data: data
    });
  }
}