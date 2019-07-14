import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';
import { User } from '../../interfaces/User';
import { Food } from '../../interfaces/Food';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {
  }

  @Get()
  getFood(): Promise<[User & [Food]]> {
    return this.foodService.getFood();
  }
}
