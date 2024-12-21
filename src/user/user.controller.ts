import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/auth/guards/current-user.decorator';
import { UserPayload } from 'src/auth/tipos/UserPayloads';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async creat(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.create(userData);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateUserDto,
     @CurrentUser() currentUser: UserPayload) {
      if (id !== currentUser.sub) {
        throw new UnauthorizedException('Você só pode atualizar suas próprias informações.');
      }
      return this.userService.update(id, data);
    }
  
}
