import { IsNotEmpty } from 'class-validator';

export class Username {
  @IsNotEmpty()
  username: string;
}
