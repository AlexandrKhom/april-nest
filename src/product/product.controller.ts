import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get('_id')
  async get(@Param('id') id: string) {
    const product = await this.productService.findById(id);
    if (!product) {
      throw new NotFoundException('product with this ID not found');
    }
    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const delProduct = await this.productService.deleteById(id);
    if (!delProduct) {
      throw new NotFoundException('delProduct with this ID not found');
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {
    const updProduct = await this.productService.updateById(id, dto);
    if (!updProduct) {
      throw new NotFoundException('delProduct with this ID not found');
    }
    return updProduct;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindProductDto) {
    return this.productService.findWithReviews(dto);
  }
}
