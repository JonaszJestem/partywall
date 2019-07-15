import { Module } from '@nestjs/common';
import { PartyModule } from './modules/party';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [PartyModule, LoginModule, MongooseModule.forRoot('mongodb://77.55.211.243/partywall')],
  controllers: [],
  providers: [],
})
export class AppModule {
}
