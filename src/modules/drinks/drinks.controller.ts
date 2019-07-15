import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from '../../interfaces/Drink';
import { AuthGuard } from '@nestjs/passport';
import { Username } from '../../interfaces/User';

@Controller('drinks')
@UseGuards(AuthGuard('jwt'))
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {
  }

  @Get()
  getDrinks(): Promise<[Username & { drinks: [Drink] }]> {
    return this.drinksService.getDrinks();
  }

  @Post()
  addDrink(@Request() request, @Body() drink: Drink) {
    return this.drinksService.addDrink(request.user, drink);
  }

  @Delete(':id')
  removeDrink(@Request() request, @Param('id') drinkId: string) {
    return this.drinksService.removeDrink(request.user, drinkId);
  }
}
