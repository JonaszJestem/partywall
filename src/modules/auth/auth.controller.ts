import { Controller, HttpCode, NotFoundException, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthService } from './auth.service';
import { User } from '../../interfaces';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() user: User) {
    const isValidUser = await this.authService.areCredentialsValid(user);

    if (isValidUser) {
      return this.authService.getPayload(user);
    } else {
      throw new NotFoundException();
    }
  }

  @Post('register')
  async register(@Body() user: User) {
    return await this.authService.register(user);
  }
}
