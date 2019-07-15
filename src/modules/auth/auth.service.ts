import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { AuthPayload, User } from '../../interfaces/User';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  public async login(user: User): Promise<any> {
    const validatedUser = await this.validate(user);

    if (!validatedUser) {
      throw new UnauthorizedException();
    }

    const payload = { _id: validatedUser._id, username: validatedUser.username };
    const accessToken = this.jwtService.sign(payload);

    return {
      access_token: accessToken,
      ...payload,
    };

  }

  public async register(user: User): Promise<User> {
    return this.userService.create(user);
  }

  private async validate(user: AuthPayload): Promise<any> {
    return await this.userService.findOne(user.username);
  }
}
