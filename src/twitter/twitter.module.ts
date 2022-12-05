import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { TwitterController } from './controller/twitter.controler';
import { TwitterService } from './service/twitter.service';
import { twitterProviders } from './twitter.provider';

@Module({
  controllers: [TwitterController],
  providers: [...databaseProviders, ...twitterProviders, TwitterService],
})
export class TwitterModule {}
