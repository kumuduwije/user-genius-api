import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
    firstname: string;
    lastname: string;
    email: string;
}
