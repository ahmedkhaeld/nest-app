import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program } from './schemas/program.schema';
import { Model } from 'mongoose';
import { UpdateProgramDto } from './dto/update-program.dto';
import { CreateProgramDto } from './dto/create-program.dto';

@Injectable()
export class ProgramService {

    constructor(@InjectModel(Program.name) private programModel: Model<Program>) {}

    async findAll(): Promise<Program[]> {
        return this.programModel.find();
    }

    async create(program: CreateProgramDto): Promise<Program> {
        const res=await this.programModel.create(program);
        return res;
    }

    async findById(id:string): Promise<Program> {
        return await this.programModel.findById(id);
    }

    async update(id:string,program: UpdateProgramDto): Promise<Program> {
       
        return await this.programModel.findByIdAndUpdate(id,program,{
            new:true,
            runValidators:true,
        });
    }

    async delete(id:string): Promise<Program> {
        return await this.programModel.findByIdAndDelete(id);
    }

}
