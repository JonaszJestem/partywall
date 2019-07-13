import { Module } from '@nestjs/common';
import { PartyModule } from './modules/party';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PartyModule, MongooseModule.forRoot('mongodb://localhost/partywall')],
  controllers: [],
  providers: [],
})
export class AppModule {
}
