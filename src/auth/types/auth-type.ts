import { Types } from 'mongoose';

export type AuthType = {
  _id: string | Types.ObjectId;
  email: string;
  passwordHash: string;
};
