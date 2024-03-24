import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PermissionModule } from 'src/permission/permission.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'someJwtSecret',
      signOptions: { expiresIn: '5m' },
    }),
    PermissionModule,
    UserModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
