import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { User } from '../../interfaces/User';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users/user.service';

@Controller('users')
export class LoginController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {
  }

  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.userService.create(user);
  }
}
