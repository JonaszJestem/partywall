import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FoodService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async getFood(): Promise<User> {
    return await this.userModel.findAll();
  }
}
