import * as mongoose from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export const FoodSchema = new mongoose.Schema({
  name: String,
  description: String,
  weight: Number,
  price: Number,
  quantity: Number,
});

export class Food {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  weight: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;
}
