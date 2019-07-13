import { Module } from '@nestjs/common';
import { DrinksModule } from '../drinks';
import { FoodModule } from '../food';

@Module({
  imports: [FoodModule, DrinksModule],
  controllers: [],
  providers: [],
})
export class PartyModule {
}
