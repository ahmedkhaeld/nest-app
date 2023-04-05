import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProgramService } from './program.service';
import { Program } from './schemas/program.schema';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Controller('programs')
export class ProgramController {

    constructor (private programService: ProgramService) {}

    @Get()
    async findAll():Promise<Program[]> {
        return this.programService.findAll();
    }

    @Post()
    async create(@Body() program: CreateProgramDto):Promise<Program> {
        return this.programService.create(program);
    }

    @Put(':id' )
    async update(@Param('id') id:string,@Body() program: UpdateProgramDto):Promise<Program> {
        return this.programService.update(id,program);
    }

    @Get(':id')
    async findById(@Param('id') id:string):Promise<Program> {
        return this.programService.findById(id);
    }


    @Delete(':id')
    async delete(@Param('id') id:string):Promise<Program> {
        return this.programService.delete(id);
    }



    
}
