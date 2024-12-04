import {
  IsDate,
  IsEmail,
  IsString,
  IsNumber,
  MinLength,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  departamento?: string;

  @IsString()
  @IsOptional()
  curso?: string;

  @IsString()
  @IsOptional()
  senha?: string;
}
