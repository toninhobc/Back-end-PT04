import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() body: { content: string; postId: number; userId: number }) {
    return this.commentsService.create(body.content, body.postId, body.userId);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('post/:postId')
  findByPost(@Param('postId') postId: string) {
    return this.commentsService.findByPostId(Number(postId));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { content: string }) {
    return this.commentsService.update(Number(id), body.content);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(Number(id));
  }
}
