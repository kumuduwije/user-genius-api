import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {PassportStrategy} from "@nestjs/passport"
import {Strategy,Profile} from "passport-google-oauth20"
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
        , configService:ConfigService){

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


           const user = await this.authService.validateUser({firstname:profile.name.givenName, lastname:profile.name.familyName, displayname:profile.displayName, email:profile.emails[0].value})

        console.log("Validating..")
        console.log(user)
           return user || null;
    }


}