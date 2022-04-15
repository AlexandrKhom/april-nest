import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AuthDocument = AuthModel & Document;

@Schema()
export class AuthModel {
  @Prop()
  _id: Types.ObjectId;

  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: false })
  updatedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
