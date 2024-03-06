import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column()
    email:string;

    @Column()
    password:string


    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }

}
