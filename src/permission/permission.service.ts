import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission, PermissionDocument } from './schema/permission.schema';
import { CreatePermissionDTO } from './dto/create-permission.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission.name)
    private readonly permissionModel: Model<PermissionDocument>,
  ) {}

  async createPermission(
    createPermissionDTO: CreatePermissionDTO,
  ): Promise<PermissionDocument> {
    const newPermission = new this.permissionModel(createPermissionDTO);
    return await newPermission.save();
  }
  async findRole(role: string) {
    return await this.permissionModel.findOne({ name: role });
  }
  async getAllPermission() {
    return await this.permissionModel.find();
  }
}
