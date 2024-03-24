import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signup(createUserDTO: CreateUserDTO) {
    return await this.userService.createUser(createUserDTO);
  }

  async login(authLoginDTO: AuthLoginDTO) {
    const { username, password } = authLoginDTO;
    const userDoc = await this.userService.findByUsername(username);
    if (!userDoc) throw new NotFoundException();
    if (userDoc.password != password) {
      throw new UnauthorizedException();
    }

    const payload = { username };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
