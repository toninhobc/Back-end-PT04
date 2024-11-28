import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, CommentsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
