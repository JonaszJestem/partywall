import { Controller, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from '../../interfaces/Drink';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../interfaces/User';

@Controller('drinks')
@UseGuards(AuthGuard('jwt'))
export class DrinksController {
  private readonly logger = new Logger(DrinksController.name);

  constructor(private readonly drinksService: DrinksService) {
  }

  @Get()
  getDrinks(): Promise<[(User & [Drink])]> {
    return this.drinksService.getDrinks();
  }

  @Post()
  addDrink(@Request('user') user: User, drink: Drink) {
    this.logger.log(user);
    return this.drinksService.addDrink(user, drink);
  }
}
