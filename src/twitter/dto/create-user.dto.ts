import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsBoolean()
  @IsNotEmpty()
  ativo: boolean;
}
