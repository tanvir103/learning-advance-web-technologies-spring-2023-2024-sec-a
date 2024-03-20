import { IsAlpha, IsEmail, IsNumberString, MaxLength, MinLength } from "class-validator";


export class UserDTO{
    @IsEmail()
    @MinLength(10)
    @MaxLength(50)
    email:string;

    
    @MinLength(3)
    @MaxLength(30)
    @IsAlpha()
    fullname:string;
    
    @MinLength(3)
    @MaxLength(20)
    city:string;
    
    @MinLength(3)
    @MaxLength(20)
    country:string;
    
    @MinLength(3)
    @MaxLength(20)
    company:string;
    
    @MinLength(11)
    @MaxLength(15)
    @IsNumberString()
    phone:string;
    
    @MinLength(8)
    @MaxLength(20)
    password:string;

    @MinLength(8)
    @MaxLength(20)
    confirmPassword:string;
}