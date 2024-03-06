import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { User } from "./user.entity";

@Entity()
export class Customer extends AbstractEntity<Customer>{

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  occupation: string;

  @ManyToOne(() => User, (user) => user.customer)
  user : User

}