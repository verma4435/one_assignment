import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(createUserDTO: CreateUserDTO): Promise<UserDocument> {
    const newUserDoc = new this.userModel(createUserDTO);
    return await newUserDoc.save();
  }
}
