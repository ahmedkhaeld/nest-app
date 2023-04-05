import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import {Organization} from '../../organization/schemas/organizaton.schema'


@Schema({
    timestamps: true,
})
export class Contract extends Document {
    
    @Prop()
    programType: string;

    @Prop()
    date: Date;

    @Prop()
    beneficiary: string;

    @Prop()
    description: string;

    @Prop()
    contacts: string[];

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Organization' }] })
    organization: Organization;
    
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
