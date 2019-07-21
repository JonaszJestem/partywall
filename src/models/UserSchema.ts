import * as mongoose from 'mongoose';
import { FoodSchema } from './FoodSchema';
import { DrinkSchema } from './DrinkSchema';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  food: [FoodSchema],
  drinks: [DrinkSchema],
});
