import { IsNotEmpty, Min } from 'class-validator';
import { Item } from './Item';

export class Food extends Item {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @Min(0)
  weight: number;
}
