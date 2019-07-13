import { Drink } from './Drink';
import { User } from './User';
import { Food } from './Food';

interface Party {
  drinks: [Drink & User];
  food: [Food & User];
}
