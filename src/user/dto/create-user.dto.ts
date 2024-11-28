import { IsDate,IsEmail, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;
  @IsString()
  password: string;

  @IsString()
  departamento: string;
  
  @IsString()
  curso: string;

  
}
