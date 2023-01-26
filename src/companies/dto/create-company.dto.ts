import { Prisma } from "@prisma/client"
import { Type } from "class-transformer"
import { IsArray, IsEmail, IsOptional, isString, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class CreateCompanyDto {

  @IsString()
  name: string

  @IsString()
  website:  string
  
  @IsString()
  cnpj: string
  
  @IsString()
  user_id: any

  user: any

}


