import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
  name: String,
  description: String,
  weight: Number,
  price: Number,
  quantity: Number,
});

export interface Food {
  name: string;
  description: string;
  weight: number;
  price: number;
  quantity: number;
}
