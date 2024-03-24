import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  private extractToken(request) {
    const [, token] = request?.headers?.token?.split(' ') || [];
    return token || null;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    console.log({ token });
    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const { username } = payload;
      const userDoc = await this.userService.findByUsername(username);
      if (!userDoc) throw new UnauthorizedException();
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
