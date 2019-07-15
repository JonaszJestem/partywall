import { Controller, Get, UseGuards } from '@nestjs/common';
import { DrinksService } from '../drinks/drinks.service';
import { FoodService } from '../food/food.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class PartyController {
  constructor(private readonly drinksService: DrinksService,
              private readonly foodService: FoodService) {
  }

  @Get('/party')
  async getParty() {
    const drinks = await this.drinksService.getDrinks();
    const food = await this.foodService.getFood();
    return { drinks, food };
  }
}
