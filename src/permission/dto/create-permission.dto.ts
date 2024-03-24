import { IsArray, IsString } from 'class-validator';

export class CreatePermissionDTO {
  @IsString()
  name: string;

  @IsArray()
  methods: string[];
}
