import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UserModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
