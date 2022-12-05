import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { TwitterService } from '../service/twitter.service';

@Controller('twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.twitterService.create(createUserDto);
  }
}
