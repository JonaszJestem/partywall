import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
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

  @Post()
  addFood(@Request() request, @Body() food: Food) {
    return this.foodService.addFood(request.user, food);
  }

  @Delete(':id')
  removeFood(@Request() request, @Param(':id') foodId: string) {
    return this.foodService.removeFood(request.user, foodId);
  }
}
