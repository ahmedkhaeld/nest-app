import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Program {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    description: string;
}


export const ProgramSchema = SchemaFactory.createForClass(Program);

ProgramSchema.index({ type: 1 }, { unique: true });