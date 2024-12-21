import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsDate,
} from 'class-validator';

export class UpdateCommentsDto {
    @IsString()
    @IsOptional()
    conteudo?: string;

    @IsNumber()
    @IsOptional()
    usuarioID?: number;

    @IsNumber()
    @IsOptional()
    avaliacaoID?: number;
}