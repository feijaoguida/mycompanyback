import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsString()
  id: string
}
