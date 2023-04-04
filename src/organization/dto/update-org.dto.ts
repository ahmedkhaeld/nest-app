import { PartialType } from "@nestjs/mapped-types";
import { CreateOrganizationDto } from "./create-org.dto";


export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto){
    
}



