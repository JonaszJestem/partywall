import { Module } from '@nestjs/common';
import { PartyModule } from './modules/party';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [ConfigModule, PartyModule, AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1/partywall')],
  controllers: [],
  providers: [],
})
export class AppModule {
}
