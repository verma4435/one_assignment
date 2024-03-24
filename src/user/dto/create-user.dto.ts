import { IsAlphanumeric, IsEnum, IsString } from 'class-validator';

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  SUPPORTER = 'SUPPORTER',
  CUSTOMER = 'CUSTOMER',
}
export class CreateUserDTO {
  @IsString()
  username: string;

  @IsAlphanumeric()
  password: string;

  @IsString()
  @IsEnum(UserRoleEnum, { each: true })
  role: string;
}
