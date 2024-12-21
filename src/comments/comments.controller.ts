import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { CurrentUser } from 'src/auth/guards/current-user.decorator';
import { UserPayload } from 'src/auth/tipos/UserPayloads';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body(ValidationPipe) commentsData: CreateCommentsDto, @CurrentUser() currentUser: UserPayload) {
    if (commentsData.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível criar posts para si mesmo');
    }
    return this.commentsService.create(commentsData);
  }

  @Get()
  async findAll() {
    return await this.commentsService.findAll();
  }

  @Get(':id')
  async findComment(@Param('id', ParseIntPipe) id: number) {
    return await this.commentsService.findComment(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateCommentsDto,
  ) {
    return await this.commentsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.commentsService.delete(id);
  }
}
