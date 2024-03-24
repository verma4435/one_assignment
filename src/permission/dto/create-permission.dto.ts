import { IsArray, IsEnum, IsString } from 'class-validator';
import { UserRoleEnum } from 'src/user/dto/create-user.dto';

export class CreatePermissionDTO {
  @IsString()
  @IsEnum(UserRoleEnum, { each: true })
  name: string;

  @IsArray()
  methods: string[];
}
