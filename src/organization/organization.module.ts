import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema } from './schemas/organizaton.schema';
import { ContractSchema } from '../contract/schemas/contract.schema';
import { ContractService } from '../contract/contract.service';


@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: 'Organization', schema: OrganizationSchema },
      { name: 'Contract', schema: ContractSchema }
    ]) 
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, ContractService]
})
export class OrganizationModule {}
