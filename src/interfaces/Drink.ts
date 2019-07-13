import * as mongoose from 'mongoose';

export const DrinkSchema = new mongoose.Schema({
  name: String,
  volume: Number,
  price: Number,
  quantity: Number,
});

export interface Drink {
  name: string;
  volume: number;
  price: number;
  quantity: number;
}
