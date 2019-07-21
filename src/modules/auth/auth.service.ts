import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { BcryptService } from './bcrypt.service';
import { AuthPayload, User } from '../../interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {
  }

  async register(user: User) {
    user.password = await this.bcryptService.encrypt(user.password);
    return this.userService.create(user);
  }

  async getPayload(user: User): Promise<AuthPayload> {
    const payload = { id: user._id, username: user.username };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      ...payload,
    };
  }

  async areCredentialsValid(user: User): Promise<boolean> {
    const existingUser = await this.userService.findOne(user.username);

    return await this.passwordMatches(user, existingUser);
  }

  private async passwordMatches(sentUser: User, existingUser: User): Promise<boolean> {
    return await this.bcryptService.areEqual(sentUser.password, existingUser.password);
  }
}
