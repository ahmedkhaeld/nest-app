export class CreateContractDto{
    readonly programType: string;
    readonly organization_id: string;
    readonly date: Date;
    readonly beneficiary: string;
    readonly description: string;
    readonly contact_info: string[];
}