import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTweetDto } from '../dto/create-tweet.dto';
import { UserDataDto } from '../dto/user-data.dto';
import { TweetEntity } from '../entities/tweet.entity';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class TweetService {
  constructor(
    @Inject('TWEET_REPOSITORY')
    private tweetRepository: Repository<TweetEntity>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}
  create(userDataDto: UserDataDto, createTweetDto: CreateTweetDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const tweetOwnerInstance = this.userRepository.create(userDataDto);
        const tweetInstance = this.tweetRepository.create();
        tweetInstance.tweet = createTweetDto.content;
        tweetInstance.user = tweetOwnerInstance;
        resolve(await this.tweetRepository.save(tweetInstance));
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail,
        });
      }
    });
  }
}
