import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { User } from '../../interfaces/User';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users/user.service';

@Controller('users')
export class LoginController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.userService.create(user);
  }
}
