import { Injectable, Logger } from '@nestjs/common';
import { AuthPayload, User } from '../../interfaces/User';
import { Drink } from '../../interfaces/Drink';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DrinksService {
  private readonly logger = new Logger(DrinksService.name);

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async getDrinks(): Promise<[User & [Drink]]> {
    return this.userModel.find({}, 'username drinks');
  }

  async addDrink(user: AuthPayload, drink: Drink) {
    this.logger.debug(user);
    return this.userModel.updateOne(user, { $push: { drinks: drink } });
  }

  async removeDrink(user: AuthPayload, drinkId: string) {
    return this.userModel.updateOne(user, { $pull: { drinks: { _id: drinkId } } });
  }
}
