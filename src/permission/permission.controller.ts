import { Body, Controller, Get, Post } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDTO } from './dto/create-permission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  get() {
    return this.permissionService.getAllPermission();
  }

  @Post()
  createPermission(@Body() createPermissionDto: CreatePermissionDTO) {
    return this.permissionService.createPermission(createPermissionDto);
  }
}
