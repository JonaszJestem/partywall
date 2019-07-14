import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { User } from '../../interfaces/User';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {
  }

  async validateUser(username: string, pass: string): Promise<Pick<User, Exclude<keyof User, 'password'>>> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
