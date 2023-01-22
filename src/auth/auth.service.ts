import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt/dist';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/userToken';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService){}
  
  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name
    }

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findEmail(email)

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        }
      }
    }
    throw new Error('Email or password is incorrect');
  }
}
