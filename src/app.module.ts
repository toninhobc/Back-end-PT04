import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { AvaliacaoController } from './avaliacao/avaliacao.controller';
import { AvaliacaoService } from './avaliacao/avaliacao.service';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [UserModule, CommentsModule, AvaliacaoModule],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AppModule {}
