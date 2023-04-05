import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractSchema } from './schemas/contract.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Contract', schema: ContractSchema }])],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
