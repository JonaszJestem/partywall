import { Module } from '@nestjs/common';
import { DrinksModule } from '../drinks';
import { FoodModule } from '../food';
import { PartyController } from './party.controller';

@Module({
  imports: [FoodModule, DrinksModule],
  controllers: [PartyController],
  providers: [],
})
export class PartyModule {
}
