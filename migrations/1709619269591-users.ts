import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1709619269591 implements MigrationInterface {

    private readonly logger = new Logger(Users1709619269591.name);

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log("Up Method Called.")
        await queryRunner.query('UPDATE user SET lastname = "Wijewardene" , email = "kumuduwijewardana3@gmail.com.com" WHERE id = 3');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        this.logger.log("Down Method Called.")
    }

}
