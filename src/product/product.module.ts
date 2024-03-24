import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UserModule } from 'src/user/user.module';
import { PermissionModule } from 'src/permission/permission.module';

@Module({
  imports: [UserModule, PermissionModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
