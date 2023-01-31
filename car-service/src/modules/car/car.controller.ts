import { Body, Controller, Delete, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { QueryParamDto } from 'src/common/dtos/query-params.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

import { CarService } from './car.service';
import { CreateCarDto } from './dto';

@Controller({
  version: ['1'],
  path: 'cars',
})
@UseGuards(JwtAuthGuard)
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getList(@Query() queryParamDto: QueryParamDto, @Request() req: any) {
    return this.carService.getListOwned(queryParamDto, req.user.sub);
  }

  @Post()
  createCar(@Body() car: CreateCarDto, @Request() req: any) {
    return this.carService.create({
      ...car,
      user_id: req.user.sub,
    });
  }

  @Get(':id')
  async getById(@Param() { id }: { id: string }) {
    return this.carService.getDetailById(Number(id));
  }

  @Delete(':id')
  async deleteByid(@Param() { id }: { id: string }, @Request() req: any) {
    return this.carService.deleteById(Number(id), req.user.sub);
  }
}
