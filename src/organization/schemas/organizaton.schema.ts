import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({
  timestamps: true,
})
export class Organization extends Document {

  @Prop({ required: true })
  arabicName: string;

  @Prop({ required: true })
  englishName: string;

  @Prop({ required: true })
  state: string;


  @Prop({ required: true })
  active: boolean;

  
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

OrganizationSchema.index({ arabicName: 1, englishName: 1 }, { unique: true });

OrganizationSchema.index({state:1})



