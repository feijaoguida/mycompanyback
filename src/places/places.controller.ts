import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags("Places")
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(id);
  
  }
  @Get('company/:company_id')
  findByCompany(@Param('company_id') company_id: string) {
    return this.placesService.findByCompany(company_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(id);
  }
}
