import { IsString,IsBoolean,Matches} from 'class-validator';


export class CreateOrganizationDto{

    @IsString()
    @Matches(/^[\t \u0621-\u064A]+$/) // Arabic with spaces
    readonly arabicName: string;

    @IsString()
    @Matches(/^[\t a-zA-Z]+$/) // English with spaces
    readonly englishName: string;

    @IsString()
    @Matches(/^[\t \u0621-\u064A]+$/)
    readonly state: string;

    @IsBoolean()
    readonly active: boolean;
}