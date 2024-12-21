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
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { AvaliacaoService } from './avaliacao.service';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { CurrentUser } from 'src/auth/guards/current-user.decorator';
import { UserPayload } from 'src/auth/tipos/UserPayloads';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto, @CurrentUser() currentUser: UserPayload) {
      if (avaliacaoData.usuarioID !== currentUser.sub) {
        throw new UnauthorizedException('Só é possível criar avaliacoes para si mesmo');
      }
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
  async updateAvaliacao(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.updateAvaliacao(id, data);
  }
}
