import * as mongoose from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export const DrinkSchema = new mongoose.Schema({
  name: String,
  volume: Number,
  price: Number,
  quantity: Number,
});

export class Drink {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  volume: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;
}
