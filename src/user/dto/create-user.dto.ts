import { IsAlphanumeric, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  username: string;

  @IsAlphanumeric()
  password: string;

  @IsString()
  role: string;
}
