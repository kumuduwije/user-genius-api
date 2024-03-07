import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateCustomerDto } from '../../customers/dto/create-customer.dto';

export class UpdateUserDto {
    firstname: string;
    lastname: string;
    email: string;

    customers: CreateCustomerDto[]
}
