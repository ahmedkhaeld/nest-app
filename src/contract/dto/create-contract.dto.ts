import { 
    IsString, IsInt, 
    IsDateString,Length, 
    IsEmail,ValidateNested,
    IsArray, Matches,ArrayUnique,
 } from 'class-validator';
 import { Type } from 'class-transformer';

export class Contacts {
    @IsString()
    @Matches(/^[\t a-zA-Z]+$/)
    @Length(3, 20)
    name: string;

    @IsInt()
    @Type(() => Number)
    phone: number;

    @IsEmail()
    email: string;

    
    @Matches(/^[\t a-zA-Z]+$/)
    job_title: string;
  
}


export class CreateContractDto{

    @IsString()
    private readonly programType: string;

    @IsDateString()
    readonly date: Date;

    @IsString()
    readonly beneficiary: string;

    @IsString()
    readonly description: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayUnique((contact: Contacts) => contact.phone)
    @ArrayUnique((contact: Contacts) => contact.email)
    @Type(() => Contacts)
    readonly contacts: Contacts[];

    @IsString()
    readonly organization_id: string;

} 