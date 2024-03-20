import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./utils/Guards";
import { Request } from 'express';

@Controller("auth")
export class AuthController{

    //http://localhost:3000/api/auth/google/login
    @Get("google/login")
    @UseGuards(GoogleAuthGuard)
    handleLogin(){
        return {msg:"Google Auth page"}
    }

    //http://localhost:3000/api/auth/google/redirect
    @Get("google/redirect")
    @UseGuards(GoogleAuthGuard)
    handleRedirect(){
        return {msg:"Google Redirect page"}
    }

    //http://localhost:3000/api/auth/status
    @Get('status')
    user(@Req() request: Request){
        //console.log(request.user)

        if(request.user){
            return {user:request.user};
        }else{
            return {msg:'Not Authenticated'}
        }
    }
}