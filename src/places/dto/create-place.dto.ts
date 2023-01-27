import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

class CompanyProperty {
  @ApiProperty()
  @IsString()
  id: string
}
export class CreatePlaceDto{
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  stret?: string;

  @ApiProperty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  State: string;

  @ApiProperty()
  @IsString()
  company_id: string;

  @ApiProperty()
  @Type(() => CompanyProperty)
  @IsString()
  company: CompanyProperty;
}
