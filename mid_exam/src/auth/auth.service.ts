import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, UserEntity } from 'entity/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt'
import { SigninDTO } from './dto/signin.dto';
import { Response } from 'express';
import { randomUUID } from 'crypto';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo:Repository<UserEntity>){}
    
    async signup(createUser:UserDTO){
        if(createUser.confirmPassword!=createUser.password)return "Password & Confirm password does not match";
        

        const res=await this.userRepo.findOne({
            where:{
                email:createUser.email
            }
        })
        if(res!=null) console.log("User already exist");
    
        const newUser:UserEntity=new UserEntity;
        newUser.email=createUser.email;
        newUser.fullname=createUser.fullname;
        newUser.city=createUser.city;
        newUser.country=createUser.country;
        newUser.company=createUser.company;
        newUser.phone=createUser.phone;
        newUser.role=Role.Customer;

        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(createUser.password, newUser.salt);
        this.userRepo.save(newUser)

    }

    async signin(signinDto: SigninDTO, @Res() res: Response){
        const {email, password} = signinDto
        const user = await this.userRepo.findOneBy({
            email,
        })

        if(user && await user.checkPassword(password)){
            res.cookie('auth', randomUUID(), {
                maxAge: 99999999999 //expire time
            })
            return {
                status : "Sign in successfull",
                role: Role[user.role]
            }
        }
        else {
            return "Invalid credentials"
        }
        
    }
}
