import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReviewDocument = ReviewModel & Document;

@Schema()
export class ReviewModel {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: false })
  updatedAt: Date;
}
export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
