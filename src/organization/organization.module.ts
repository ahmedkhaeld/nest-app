import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema } from './schemas/organizaton.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Organization', schema: OrganizationSchema }]) ],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
