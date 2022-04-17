import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { UserEmailDecorator } from '../decorators/user-email.decorator';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtGuard)
  @Get('byProduct/:productId')
  async getByProduct(
    @Param('productId') productId: string,
    @UserEmailDecorator() email: string,
  ) {
    console.log(email);
    return this.reviewService.findByProductId(productId);
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteRev = await this.reviewService.delete(id);
    if (!deleteRev) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
