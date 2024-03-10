import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {PassportStrategy} from "@nestjs/passport"
import {Strategy,Profile} from "passport-google-oauth20"

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(configService:ConfigService){
        super({
            clientID: configService.getOrThrow('GOOGLE_CLIENT_ID'),
            clientSecret:configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
            callbackURL: 'http://localhost:3000/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });

        
    }

    async validate(accessToken:string, refreshToken:string, profile:Profile){

            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
    }


}