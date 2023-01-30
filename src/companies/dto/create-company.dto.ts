import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"


export class CreateCompanyDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  website:  string
  
  @ApiProperty()
  @IsString()
  cnpj: string
  
  @ApiProperty()
  @IsString()
  user_id: string
}



