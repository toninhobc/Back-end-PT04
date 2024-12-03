import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNumber()
  usuarioID: number;
  @IsNumber()
  professorID: number;
  @IsNumber()
  disciplinaID: number;
  @IsString()
  conteudo: string;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
  @IsString()
  professor: string;
  @IsString()
  disciplina: string;
}
