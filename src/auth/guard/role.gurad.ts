import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PermissionService } from 'src/permission/permission.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly permissionService: PermissionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const requestMethod = request.method;

    const user = request.user;
    if (!user?.role) throw new UnauthorizedException();
    const { role: userRole } = user;

    const permissionForRole = await this.permissionService.findRole(userRole);

    if (
      permissionForRole?.methods?.includes('all') ||
      permissionForRole?.methods?.includes(requestMethod)
    ) {
      return true;
    }
    return false;
  }
}
