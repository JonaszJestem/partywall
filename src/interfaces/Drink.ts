import { IsNotEmpty } from 'class-validator';
import { Item } from './Item';

export class Drink extends Item {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  volume: number;
}
