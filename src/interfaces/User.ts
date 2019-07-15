import * as mongoose from 'mongoose';
import { FoodSchema } from './Food';
import { DrinkSchema } from './Drink';
import { IsNotEmpty } from 'class-validator';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  food: [FoodSchema],
  drinks: [DrinkSchema],
});

export class User {
  _id: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}

export interface Username {
  username: string;
}

export interface AuthPayload {
  _id: string;
  username: string;
}
