import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../interfaces';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async create(userDto: User) {
    const user = new this.userModel(userDto);

    try {
      await user.save();
    } catch (e) {
      if (e.errmsg.includes('E11000')) {
        throw new ConflictException();
      }
    }
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }
}
