import { AbstractEntity } from "src/users/entities/abstract.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

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