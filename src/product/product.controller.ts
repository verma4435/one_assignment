import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('product')
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
