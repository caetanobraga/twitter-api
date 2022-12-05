import { DataSource } from 'typeorm';
import { TweetEntity } from './entities/tweet.entity';
import { UserEntity } from './entities/user.entity';

export const twitterProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'TWEET_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(TweetEntity),
    inject: ['DATA_SOURCE'],
  },
];
