import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { SigninDTO } from './dto/signin.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('create')
    createUser(@Body()user:UserDTO){
        this.authService.signup(user);
    }
    @Post('signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SigninDTO, @Res({passthrough: true}) res: Response){
        return this.authService.signin(signinDto, res)
    }

    @Post('logout')
    async logout(@Req() req: Request, @Res({passthrough: true}) res: Response){
        if(req.cookies.user) {
            res.clearCookie('auth')
            return 'logout successfull';
        }
        return 'please login first.';
    }
    
}
