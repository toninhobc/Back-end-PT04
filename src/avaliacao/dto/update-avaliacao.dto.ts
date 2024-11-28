import { IsDate, IsOptional, IsString } from "class-validator";

export class UpdateAvaliacaoDto {
    @IsOptional()
    @IsString()
    conteudo: string;
    @IsOptional()
    @IsDate()
    createdAt: Date;
    @IsOptional()
    @IsDate()
    updatedAt: Date;
}