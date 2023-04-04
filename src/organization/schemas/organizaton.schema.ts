import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({
  timestamps: true,
})
export class Organization {

  @Prop()
  arabicName: string;

  @Prop()
  englishName: string;

  @Prop()
  state: string;


  @Prop()
  active: boolean;

  
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
