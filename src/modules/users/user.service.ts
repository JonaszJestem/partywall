import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../interfaces/User';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async create(userDto: User): Promise<User> {
    const user = new this.userModel(userDto);
    return await user.save();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username });
  }
}
