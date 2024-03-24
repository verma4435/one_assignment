import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  role: string;
}
