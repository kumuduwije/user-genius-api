// src/customers/customers.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { CustomersService } from './customers.service';
// import { Customer } from './customer.entity';
import { Customer } from './entities/customer.entity';
import { UpdateCustomerDto } from './dto/update-customer.dto';


@Controller('users/:userId/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(@Param('userId') userId: string, @Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customersService.create(+userId, customerData);
  }

  @Get()
  async findAll(@Param('userId') userId: string): Promise<Customer[]> {
    return this.customersService.findAllByUserId(+userId);
  }

  @Get(':id')
  async findOne(@Param('userId') userId: string, @Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(+userId, +id);
  }

  @Put(':id')
  async updateAll(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() customerData: Partial<Customer>,
  ): Promise<Customer> {
    return this.customersService.update(+userId, +id, customerData);
  }

  @Patch(':id')
  async update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.update(+userId, +id, updateCustomerDto);
  }

  
  @Delete(':id')
  async remove(@Param('userId') userId: string, @Param('id') id: string): Promise<void> {
    return this.customersService.remove(+userId, +id);
  }
}
