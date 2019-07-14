import { Controller, Get, UseGuards } from '@nestjs/common';
import { FoodService } from './food.service';
import { User } from '../../interfaces/User';
import { AuthGuard } from '@nestjs/passport';
import { Food } from '../../interfaces/Food';

@Controller('food')
@UseGuards(AuthGuard('jwt'))
export class FoodController {
  constructor(private readonly foodService: FoodService) {
  }

  @Get()
  getFood(): Promise<[User & [Food]]> {
    return this.foodService.getFood();
  }
}
