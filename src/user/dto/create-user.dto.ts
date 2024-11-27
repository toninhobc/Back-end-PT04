import { IsEmail, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;
  @IsNumber()
  age: number;

  @IsString()
  @MinLength(6)
  password: string;
}
