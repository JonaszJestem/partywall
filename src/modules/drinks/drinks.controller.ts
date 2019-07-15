import { Body, Controller, Delete, Get, Logger, Param, Post, Request, UseGuards } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from '../../interfaces/Drink';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../interfaces/User';

@Controller('drinks')
@UseGuards(AuthGuard('jwt'))
export class DrinksController {
  private readonly logger = new Logger(DrinksService.name);

  constructor(private readonly drinksService: DrinksService) {
  }

  @Get()
  getDrinks(): Promise<[(User & [Drink])]> {
    return this.drinksService.getDrinks();
  }

  @Post()
  addDrink(@Request() request, @Body() drink: Drink) {
    this.logger.debug(request);
    this.logger.debug(drink);
    return this.drinksService.addDrink(request.user, drink);
  }

  @Delete(':id')
  removeDrink(@Request() request, @Param(':id') drinkId: string) {
    this.logger.debug(request);
    this.logger.debug(drinkId);
    return this.drinksService.removeDrink(request.user, drinkId);
  }
}
