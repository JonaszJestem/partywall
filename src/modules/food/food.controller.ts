import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller()
export class FoodController {
  constructor(private readonly foodService: FoodService) {
  }

  @Get()
  getFood(): string {
    return '';
  }
}
