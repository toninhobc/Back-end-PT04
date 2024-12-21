import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginRequestBody } from './dto/LoginRequestBody';
import { UserPayload } from './tipos/UserPayloads';
import { UserToken } from './tipos/UserTokens';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}
    
    async login(loginRequestBody: LoginRequestBody): Promise<UserToken> {

        const isUserValid = await this.validateUser(loginRequestBody.email, loginRequestBody.senha);

        if (!isUserValid) {
            throw new UnauthorizedException('Usuário ou senha incorretos');
        }
        
        const payload: UserPayload = {
            sub: isUserValid.id,
            email: loginRequestBody.email,
        };
        //oq q essa linha faz ??
        const jwtSecret = this.configService.get<string>('JWT_SECRET');

        const jwtToken = await this.jwtService.signAsync(payload, {expiresIn: '3d', secret: jwtSecret});

        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, senha: string) {
        const user = await this.userService.findByEmail(email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(senha, user.senha);

            if (isPasswordValid) {
                return {
                    ...user,
                    senha: undefined,
                };
            } 
        } 

        return null;
    }
}