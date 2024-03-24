import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('product')
@UseGuards(AuthGuard)
export class ProductController {
  @Get()
  getProduct() {
    return 'Products sent successfully';
  }

  @Post()
  createProduct() {
    return 'Product added successfully';
  }

  @Put()
  updateProduct() {
    return 'Product updated successfully';
  }

  @Patch()
  patchProduct() {
    return 'Product updated successfully';
  }

  @Delete()
  deleteProduct() {
    return 'Product deleted successfully';
  }
}
