import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Contract } from './schemas/contract.schema';

@Controller('contracts')
export class ContractController {
    constructor(private contractService: ContractService) {}

    @Get()
    async findAll():Promise<Contract[]> {
        return this.contractService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id:string):Promise<Contract> {
        return this.contractService.findById(id);
    }

    
    @Post()
    async create(@Body() contract: Contract):Promise<Contract> {
        return this.contractService.create(contract);
    }

    @Put(':id')
    async update(@Param('id') id:string,@Body() contract: Contract):Promise<Contract> {
        return this.contractService.update(id,contract);
    }

    @Delete(':id')
    async delete(@Param('id') id:string):Promise<Contract> {
        return this.contractService.delete(id);
    }

}
