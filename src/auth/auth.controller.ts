import { Controller, Get, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./utils/Guards";

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
}