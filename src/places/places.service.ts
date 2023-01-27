import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private readonly prismaService: PrismaService) {}
  
  create(createPlaceDto: CreatePlaceDto) {
    try{
      const { name, stret, number, city, State, company_id } = createPlaceDto
      const data: Prisma.PlaceCreateInput = {
        name,
        number,
        city,
        State,
        stret,
        company: {
          connect: { id: company_id }
          }
      }

      return this.prismaService.place.create({ data});
    } catch (error) {
      console.log("Error, ", error)
    }
  }

  findAll() {
    return this.prismaService.place.findMany();
  }

  findOne(id: string) {
    return this.prismaService.place.findUnique({ where: { id }});
  }

  update(id: string, updatePlaceDto: UpdatePlaceDto) {
    try{
      const { name, stret, number, city, State, company_id } = updatePlaceDto
      const data: Prisma.PlaceUpdateInput = {
        name,
        number,
        city,
        State,
        stret,
        company: {
          connect: { id: company_id }
          }
      }

      return this.prismaService.place.update( { data, where: { id: id }})
    } catch (error) {
      console.log("Error, ", error)
    }
  }

  async remove(id: string) {
    try{
      const exists = await this.findOne(id)
      if (!exists) return `The place #${id} not exists`
      return this.prismaService.place.delete({ where: { id }})
    } catch (error) {
      console.log("Error, ", error)
    }
  }
}
