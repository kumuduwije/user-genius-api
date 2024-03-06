import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class UsersService {

  constructor (
    @InjectRepository(User)
      private readonly usersRepository: Repository<User>,
      private readonly entityManager: EntityManager
    ){}
  

  async create(createUserDto: CreateUserDto) {

    const user = new User(createUserDto);
    await this.entityManager.save(user);
  }

 async findAll() {
    return  this.usersRepository.find()
  }

  async findOne(id: number) {

    return this.usersRepository.findOne({
      where:{id},
      relations:{customer:true}
    })
    // return this.usersRepository.findOne({where: {id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersRepository.findOneBy( {id});

    updatedUser.firstname = updateUserDto.firstname
    updatedUser.lastname = updateUserDto.lastname
    updatedUser.email = updateUserDto.email

    // Update customer data
    // const customers = updateUserDto.customers.map((createCustomerDto) => new Customer(createCustomerDto));
    // updatedUser.customer = customers;

    await this.usersRepository.save(updatedUser)

  }

  async remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
