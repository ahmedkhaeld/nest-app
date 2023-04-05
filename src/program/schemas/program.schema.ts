import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Program {
    @Prop()
    type: string;

    @Prop()
    description: string;
}


export const ProgramSchema = SchemaFactory.createForClass(Program);