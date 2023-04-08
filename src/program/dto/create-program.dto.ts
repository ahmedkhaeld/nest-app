import { IsString, Matches } from 'class-validator';


export class CreateProgramDto {
    @IsString()
    @Matches(/^[\u0621-\u064A a-zA-Z]+$/) // Ar or En with spaces
    readonly name: string;

    @IsString()
    readonly description: string;
  
}