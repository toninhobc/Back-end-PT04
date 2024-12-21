import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNumber()
  usuarioID: number;
  @IsString()
  conteudo: string;
  @IsString()
  professor: string;
  @IsString()
  disciplina: string;
}
