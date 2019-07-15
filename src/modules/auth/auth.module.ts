import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../users/user.module';
import { jwtConstants } from './constants';
// import { LocalStrategy } from '../../../dist/modules/auth/local.strategy';
import { JwtStrategy } from './jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, /*LocalStrategy,*/ JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {
}
