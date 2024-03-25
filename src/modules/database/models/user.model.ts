import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  collection: 'Users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User {
  _id: Types.ObjectId;

  @ApiProperty({ type: 'string' })
  @Prop({ required: true })
  full_name: string;

  @ApiProperty({ type: 'string' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ type: 'string' })
  @Prop({ type: Types.ObjectId })
  group_id: Types.ObjectId;

  @ApiProperty({ type: 'string' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ type: 'boolean' })
  @Prop({ default: false })
  is_deleted: boolean;
}

export type UserDocument = User & mongoose.Document;

export const UserSchema = SchemaFactory.createForClass(User);
