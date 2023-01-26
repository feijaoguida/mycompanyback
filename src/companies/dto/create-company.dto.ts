import { ApiProperty } from "@nestjs/swagger"
import { Prisma } from "@prisma/client"
import { Type } from "class-transformer"
import { IsArray, IsEmail, IsOptional, isString, IsString, Matches, MaxLength, MinLength } from "class-validator"

class UserProperty {
  @ApiProperty()
  @IsString()
  id: string
}
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
  
  @ApiProperty()
  @Type(() => UserProperty)
  @IsString()
  user: UserProperty

}



