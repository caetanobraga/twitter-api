import { IsNotEmpty } from 'class-validator';

export class UserDataDto {
  @IsNotEmpty()
  readonly id: number;
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly email: string;
}
