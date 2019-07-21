import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { BcryptService } from './bcrypt.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        privateKey: configService.getJWTPrivateKey(),
        publicKey: configService.getJwtPublicKey(),
      }),
      inject: [ConfigService],
    })],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtStrategy],
  exports: [AuthService],
})

export class AuthModule {
}
