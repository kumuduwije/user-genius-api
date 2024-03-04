import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
    return this.usersRepository.findOneBy( {id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersRepository.findOneBy( {id});

    updatedUser.firstname = updateUserDto.firstname
    updatedUser.lastname = updateUserDto.lastname
    updatedUser.email = updateUserDto.email

    await this.usersRepository.save(updatedUser)

  }

  async remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
