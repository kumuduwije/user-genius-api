import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Customer } from "./customer.entity";

@Entity()
export class User extends AbstractEntity<User> {

    // @PrimaryGeneratedColumn()
    // id: number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column()
    email:string;

    @Column()
    password:string

    @OneToMany(() => Customer, (customer) => customer.user, {cascade:true})
    customer: Customer[]


    // constructor(user: Partial<User>) {
    //     Object.assign(this, user);
    // }

}
