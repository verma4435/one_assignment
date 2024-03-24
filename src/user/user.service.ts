import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const existingUserDoc = await this.findByUsername(createUserDTO.username);
    if (existingUserDoc) {
      throw new HttpException('Username taken', HttpStatus.BAD_REQUEST);
    }

    const newUserDoc = new this.userModel(createUserDTO);
    return await newUserDoc.save();
  }

  async findByUsername(username: string): Promise<UserDocument> {
    return await this.userModel.findOne({ username });
  }
}
