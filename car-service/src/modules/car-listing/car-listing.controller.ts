import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { QueryParamDto } from 'src/common/dtos/query-params.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CarListingService } from './car-listing.service';
import { CreateCarListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Controller({
  version: ['1'],
  path: 'cars-listing',
})
@UseGuards(JwtAuthGuard)
export class CarListingController {
  constructor(private readonly carListingService: CarListingService) {}

  @Get()
  getList(@Query() queryParamDto: QueryParamDto) {
    return this.carListingService.getList(queryParamDto);
  }

  @Post()
  create(@Body() car: CreateCarListingDto) {
    return this.carListingService.create(car);
  }

  @Get(':id')
  async getById(@Param() { id }: { id: string }) {
    return this.carListingService.getDetailById(Number(id));
  }

  @Put(':id')
  updateCar(@Param() { id }: { id: string }, @Body() carListing: UpdateListingDto) {
    return this.carListingService.updateById(Number(id), carListing);
  }

  @Delete(':id')
  async deleteByid(@Param() { id }: { id: string }) {
    return this.carListingService.deleteById(Number(id));
  }
}
