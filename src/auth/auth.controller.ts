import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { Public } from './decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Public()
  login(@Body() authLoginDTO: AuthLoginDTO) {
    return this.authService.login(authLoginDTO);
  }

  @Post('/signup')
  @Public()
  register(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.signup(createUserDTO);
  }
}
