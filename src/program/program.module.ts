import { Module } from '@nestjs/common';
import { ProgramController } from './program.controller';
import { ProgramService } from './program.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramSchema } from './schemas/program.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Program', schema: ProgramSchema }])],
  controllers: [ProgramController],
  providers: [ProgramService]
})
export class ProgramModule {}
