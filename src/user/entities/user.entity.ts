import { IsNumber, IsOptional,IsString } from "class-validator";

export class UserEntity {
    @IsNumber()
    id: number;

    @IsString()
    email: string;

    @IsString()
    senha: string;

    @IsString()
    @IsOptional()
    name?: string;

    createdAt?: Date;
    Update?: Date;
}