import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDetails } from "src/types/userTypes";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService{

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){
        
    }

    async validateUser( details: UserDetails){
        console.log("Auth Service")
        console.log(details)


        const user = await this.userRepository.findOneBy({email:details.email})
        if(user){
            console.log("User already exist in the database")
            return user;
        }
            
        // Create a user if not exist
        console.log("User not found. Creating...")
        const newUser = this.userRepository.create(details)

        return this.userRepository.save(newUser);
    }

}