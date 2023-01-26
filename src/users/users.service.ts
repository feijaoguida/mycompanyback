import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    const userExist = await this.findEmail(createUserDto.email)
    if (userExist) {
      console.log("This email already exists!!!")
      return
    }

    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
  
    const createdUser = await this.prismaService.user.create({ data });
  
    return {
      ...createdUser,
      password: undefined,
    };
  }

  findEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email }});
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id }});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExist = await this.findOne(id)
    if (!userExist) {
      console.log("This User not existe")
      return
    }

    return await this.prismaService.user.update({ where: { id }, data: updateUserDto})
  }

  async remove(id: string) {
    const userExist = await this.findOne(id)
    if (!userExist) {
      console.log("This User not existe")
      return
    }

    return await this.prismaService.user.delete({ where: { id }})
  }
}
