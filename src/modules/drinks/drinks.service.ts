import { Injectable } from '@nestjs/common';
import { Drink, User, Username } from '../../interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DrinksService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async getDrinks(): Promise<[Username & { drinks: [Drink] }]> {
    return this.userModel.find({}, 'username drinks');
  }

  async addDrink({ _id }, drink: Drink) {
    return this.userModel.updateOne({ _id }, { $push: { drinks: drink } });
  }

  async removeDrink({ _id }, drinkId: string) {
    return this.userModel.updateOne({ _id }, { $pull: { drinks: { _id: drinkId } } });
  }
}
