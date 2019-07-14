import * as mongoose from 'mongoose';
import { FoodSchema } from './Food';
import { DrinkSchema } from './Drink';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  food: [FoodSchema],
  drinks: [DrinkSchema],
});

export interface Username {
  username: string;
}

export interface User {
  username: string;
  password: string;
}
