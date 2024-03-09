// src/customers/customers.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Customer } from './customer.entity';

import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(userId: number, customerData: Partial<Customer>): Promise<Customer> {
    const customer = this.customersRepository.create({
      ...customerData,
      user: { id: userId }, // Associate the customer with the user
    });
    return this.customersRepository.save(customer);
  }

  async findAllByUserId(userId: number): Promise<Customer[]> {
    return this.customersRepository.find({ where: { user: { id: userId } } });
  }

  async findOne(userId: number, customerId: number): Promise<Customer> {
    return this.customersRepository.findOne({ where: { id: customerId, user: { id: userId } } });
  }

  async update(userId: number, customerId: number, customerData: Partial<Customer>): Promise<Customer> {
    await this.customersRepository.update({ id: customerId, user: { id: userId } }, customerData);
    return this.findOne(userId, customerId);
  }

  async remove(userId: number, customerId: number): Promise<void> {
    await this.customersRepository.delete({ id: customerId, user: { id: userId } });
  }
}
