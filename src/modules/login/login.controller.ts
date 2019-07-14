import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../users/user.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { User } from '../../interfaces/User';

@Controller('users')
export class LoginController {
  constructor(private readonly userService: UserService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req): Promise<User> {
    return req.user;
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.userService.create(user);
  }
}
