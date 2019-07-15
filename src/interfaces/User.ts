import * as mongoose from 'mongoose';
import { FoodSchema } from './Food';
import { DrinkSchema } from './Drink';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  food: [FoodSchema],
  drinks: [DrinkSchema],
});

export interface User {
  _id: string;
  username: string;
  password: string;
}

export interface AuthPayload {
  _id: string;
  username: string;
}
