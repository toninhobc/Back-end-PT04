import { IsDate,IsEmail, IsString, IsNumber, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  departamento: string;
  
  @IsString()
  curso: string;

  
}