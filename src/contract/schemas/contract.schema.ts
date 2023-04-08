import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import {Organization} from '../../organization/schemas/organizaton.schema'

class Contacts {
    name: string;

    phone: number;

    email: string;

    job_title: string;
  
}

@Schema({
    timestamps: true,
})
export class Contract extends Document {
    
    @Prop({ required: true })
    programType: string;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    beneficiary: string;

    @Prop({ required: true })
    description: string;

    @Prop({
        required: true,
        type: Contacts, // specify the type of the nested object
        unique: true,
      })
      contacts: Contacts[];

    @Prop({
        required:true, 
        type: [{ type: Types.ObjectId, ref: 'Organization' }] 
    })
    organization_id: Organization;
    
}

export const ContractSchema = SchemaFactory.createForClass(Contract);

ContractSchema.index({ programType: 1 }, { unique: true });

ContractSchema.index({organization_id:1})