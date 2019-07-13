import { Module } from '@nestjs/common';
import { PartyModule } from './modules/party';

@Module({
  imports: [PartyModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
