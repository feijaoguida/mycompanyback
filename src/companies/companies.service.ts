import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async create(paramentros: CreateCompanyDto) {
    try {
      const { name, cnpj, user_id, website } = paramentros
      const data: Prisma.CompanyCreateInput = {
        name,
        cnpj,
        website,
        user: {
          connect: { id: user_id }
        }
      }
      const result = await this.prismaService.company.create({ data })
      return result;
      
    } catch (error) {
      console.log("Error, ", error)
    }
  }

  findAll() {
    return this.prismaService.company.findMany({
      include: {
        user: true,
      }
    });
  }

  findOne(id: string) {
    return this.prismaService.company.findUnique({
      where: { id },
      include: {
        user: true
      }
    });
  }

  async update(id: string, paramentros: UpdateCompanyDto) {
    try {
      const { name, cnpj, user_id, website } = paramentros
      const data: Prisma.CompanyUpdateInput = {
        name,
        cnpj,
        website,
        updated_at: new Date(),
        user: {
          connect: { id: user_id }
        }
      }
      const result = await this.prismaService.company.update( { data, where: { id: id }})
      return result;
    } catch (error) {
      console.log("Error, ", error)
    }
  }

  async remove(id: string) {
    const company = await this.findOne(id)
    if (!company) return `The company #${id} not exists`

    return await this.prismaService.company.delete({ where: { id }})
  }
}


