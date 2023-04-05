import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Contract} from './schemas/contract.schema';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';


@Injectable()
export class ContractService {

    constructor(@InjectModel(Contract.name) private contractModel: Model<Contract>) {}

    async findAll(): Promise<Contract[]> {
        return this.contractModel.find();
    }

    async create(contract: CreateContractDto): Promise<Contract> {
        const res=await this.contractModel.create(contract);
        return res;
    }

    async findById(id:string): Promise<Contract> {
        const contract=await this.contractModel.findById(id);

        if(!contract){
            throw new Error('Contract not found');
        }
        return contract;
    }

    
    async findByOrgId(orgId:string): Promise<Contract[]>{

        const c=await this.contractModel.find({organization:orgId});

        if(!c){
            throw new Error('Contract not found');
        }
        return c;
    }

    async findbyOrgAndByContract(orgId:string, contractId:string):Promise<Contract>{
        const c = await this.contractModel.findOne({organization:orgId, _id:contractId})
        if(!c){
            throw new Error('Contract not found');
        }

        return c;
    }

    async update(id:string,contract: UpdateContractDto): Promise<Contract> {
    
        return await this.contractModel.findByIdAndUpdate(id,contract,{
            new:true,
            runValidators:true,
        });
    }

    async delete(id:string): Promise<Contract> {
        return await this.contractModel.findByIdAndDelete(id);
    }

}
