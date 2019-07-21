import { Injectable } from '@nestjs/common';
import { saltRounds } from './constants';

@Injectable()
export class BcryptService {
  private bcrypt: any;

  constructor() {
    this.bcrypt = require('bcrypt');
  }

  async encrypt(password) {
    return await this.bcrypt.hash(password, saltRounds);
  }

  async areEqual(firstPassword, secondPassword) {
    return await this.bcrypt.compare(firstPassword, secondPassword);
  }
}
