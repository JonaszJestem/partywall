import { Min } from 'class-validator';

export class Item {
  @Min(0)
  price: number;

  @Min(0)
  quantity: number;
}
