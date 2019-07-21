import { IsNotEmpty } from 'class-validator';
import { Username } from './Username';

export class AuthPayload extends Username {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  accessToken: string;
}
