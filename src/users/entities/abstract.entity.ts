import { PrimaryGeneratedColumn } from "typeorm";


export abstract class AbstractEntity<T> {
    @PrimaryGeneratedColumn()
    id: number;


    constructor(entity:Partial<T>){
        Object.assign(this,entity);
    }
}

// Id is a abstract and should not be included in every entity