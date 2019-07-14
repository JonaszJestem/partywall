import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/User';
import { Drink } from '../../interfaces/Drink';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DrinksService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async getDrinks(): Promise<[User & [Drink]]> {
    return this.userModel.find({}, 'username drinks');
  }

  async addDrink(user: User, drink: Drink) {
    return this.userModel.updateOne(user, { $push: { drinks: drink } });
  }
}
