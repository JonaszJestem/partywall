import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food } from '../../interfaces/Food';

@Injectable()
export class FoodService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async getFood(): Promise<[User & [Food]]> {
    return this.userModel.find({}, 'username food');
  }

  async addFood(user: User, food: Food) {
    return this.userModel.updateOne(user, { $push: { food: food } });
  }

  async removeFood(user: User, foodId: string) {
    return this.userModel.updateOne(user, { $pull: { _id: foodId } });
  }
}
