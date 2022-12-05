import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { twitterProviders } from './twitter.provider';

@Module({
  controllers: [UsersController],
  providers: [...databaseProviders, ...twitterProviders, UsersService],
})
export class TwitterModule {}
