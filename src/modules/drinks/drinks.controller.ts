import { Controller, Get } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from '../../interfaces/Drink';
import { User } from '../../interfaces/User';

@Controller()
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {
  }

  @Get('/drinks')
  getDrinks(): Promise<[(User & [Drink])]> {
    return this.drinksService.getDrinks();
  }
}
