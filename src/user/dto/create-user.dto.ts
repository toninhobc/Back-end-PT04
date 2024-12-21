import {
  IsDate,
  IsEmail,
  IsString,
  IsNumber,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senha: string;

  @IsString()
  departamento: string;

  @IsString()
  curso: string;
}
