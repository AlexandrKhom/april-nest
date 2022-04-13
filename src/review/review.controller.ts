import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}

  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Delete('_id')
  async delete(@Param('_id') id: string) {}
}
