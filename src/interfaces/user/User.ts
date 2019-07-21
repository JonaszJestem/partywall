import { IsNotEmpty } from 'class-validator';
import { Username } from './Username';

export class User extends Username {
  _id: string;
  @IsNotEmpty()
  password: string;
}
