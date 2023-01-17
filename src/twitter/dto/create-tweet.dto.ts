import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @MinLength(1)
  @MaxLength(280)
  @IsNotEmpty()
  readonly content: string;
}
