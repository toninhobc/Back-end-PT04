import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, CommentsModule, AvaliacaoModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
