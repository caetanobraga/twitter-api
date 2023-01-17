import { Controller, Post, Body, Request } from '@nestjs/common';
import { CreateTweetDto } from '../dto/create-tweet.dto';
import { TweetService } from '../service/tweet.service';
import { UserService } from '../service/user.service';

@Controller('createTweet')
export class TweetController {
  constructor(
    private readonly tweetService: TweetService,
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@Request() request, @Body() body: CreateTweetDto) {
    return this.tweetService.create(request.query, body);
  }
}
