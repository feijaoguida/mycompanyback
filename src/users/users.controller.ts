import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@ApiTags("Users")
@Controller('users')
export class UsersPubliController {
  constructor(private readonly usersService: UsersService) {}
}
@ApiBearerAuth()
@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Get(':email')
  findEmail(@Param('email') email: string) {
    return this.usersService.findEmail(email);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() createUserDto: CreateUserDto,  @Request() req: any) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')  
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
