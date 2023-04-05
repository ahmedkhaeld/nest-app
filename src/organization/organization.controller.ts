import { Controller, Get, Put,Post,Delete, Param, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from './schemas/organizaton.schema';
import { CreateOrganizationDto } from './dto/create-org.dto';
import { UpdateOrganizationDto } from './dto/update-org.dto';
import { Contract } from '../contract/schemas/contract.schema';
import { ContractService } from '../contract/contract.service';

@Controller('organizations')
export class OrganizationController {

    constructor(
        private organizationService: OrganizationService,
        private contractService: ContractService
        ) {}

    @Get()
    async findAll():Promise<Organization[]> {
        return this.organizationService.findAll();
    }

    @Post()
    async create(@Body() organization: CreateOrganizationDto):Promise<Organization> {
        return this.organizationService.create(organization);
    }

    @Get(':id')
    async findById(@Param('id') id:string):Promise<Organization> {
        return this.organizationService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id:string,@Body() organization: UpdateOrganizationDto):Promise<Organization> {
        return this.organizationService.update(id,organization);
    }

    @Delete(':id')
    async delete(@Param('id') id:string):Promise<Organization> {
        return this.organizationService.delete(id);
    }


    @Get(':id/contracts')
    async findByOrgId(@Param('id') id:string):Promise<Contract[]> {
        return this.contractService.findByOrgId(id);
    }

    @Get(':id/contracts/:contractId')
    async findbyOrgAndByContract(@Param('id') id:string, @Param('contractId') contractId:string):Promise<Contract>{
        return this.contractService.findbyOrgAndByContract(id,contractId);
    }
    

}
