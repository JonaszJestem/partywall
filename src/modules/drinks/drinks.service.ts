import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/User';
import { Drink } from '../../interfaces/Drink';

@Injectable()
export class DrinksService {
  getDrinks(): [Drink & User] {
    return [];
  }
}
