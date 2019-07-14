import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UserModule } from '../users/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [LoginController],
})
export class LoginModule {
}
