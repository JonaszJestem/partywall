import { Controller, Get } from '@nestjs/common';
import { DrinksService } from './drinks.service';

@Controller()
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {
  }

  @Get()
  getDrinks(): string {
    return '';
  }
}
