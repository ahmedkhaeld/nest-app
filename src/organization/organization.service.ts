import { Injectable } from '@nestjs/common';
import { Organization } from './schemas/organizaton.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UpdateOrganizationDto } from './dto/update-org.dto';

@Injectable()
export class OrganizationService {

    //inject the model
    constructor(@InjectModel(Organization.name) private organizationModel: mongoose.Model<Organization>) {}

    async findAll(): Promise<Organization[]> {
        return this.organizationModel.find();
    }

    async create(organization: Organization): Promise<Organization> {
        const res=await this.organizationModel.create(organization);
        return res;
    }

    async findById(id:string): Promise<Organization> {
        const org=await this.organizationModel.findById(id);

        if(!org){
            throw new Error('Organization not found');
        }

        return org;
    }

    async update(id:string,organization: UpdateOrganizationDto): Promise<Organization> {
     
        return await this.organizationModel.findByIdAndUpdate(id,organization,{
            new:true,
            runValidators:true,
        });
    }

    async delete(id:string): Promise<Organization> {
        return await this.organizationModel.findByIdAndDelete(id);
    }

}
