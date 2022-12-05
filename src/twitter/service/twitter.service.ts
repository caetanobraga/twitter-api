import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class TwitterService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const userToSave = this.userRepository.create(createUserDto);
        resolve(await this.userRepository.save(userToSave));
      } catch (error) {
        reject(error);
      }
    });
  }
}
