import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

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
}
