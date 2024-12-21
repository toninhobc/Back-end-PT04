import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsDate,
} from 'class-validator';

export class CreateCommentsDto {
    @IsString()
    @IsNotEmpty()
    conteudo: string;

    @IsNumber()
    @IsNotEmpty()
    usuarioID: number;

    @IsNumber()
    @IsNotEmpty()
    avaliacaoID: number;
}