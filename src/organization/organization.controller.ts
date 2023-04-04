import { Controller, Get, Put,Post,Delete, Param, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from './schemas/organizaton.schema';
import { CreateOrganizationDto } from './dto/create-org.dto';
import { UpdateOrganizationDto } from './dto/update-org.dto';

@Controller('organizations')
export class OrganizationController {

    constructor(private organizationService: OrganizationService) {}

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

}
