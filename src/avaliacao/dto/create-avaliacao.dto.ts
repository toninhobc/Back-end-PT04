import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDto {
    @IsNumber()
    usuarioId: number;
    @IsNumber()
    professorId: number;
    @IsNumber()
    disciplinaId: number;
    @IsString()
    conteudo: string;
    @IsDate()
    createdAt: Date;
    @IsDate()
    updatedAt: Date;
}