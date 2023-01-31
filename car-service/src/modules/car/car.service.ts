// import { CreateUserDto } from './dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ISearchPaginationParams } from 'src/database/interfaces/pagination.interface';
import { FindManyOptions, Like } from 'typeorm';
import { ICar } from './car.interface';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private carRepository: CarRepository) {}

  getList(paginateParams: ISearchPaginationParams) {
    const options: FindManyOptions = {};
    if (paginateParams.search) {
      options.where = {
        brand: Like(`%${paginateParams.search}%`),
      };
    }

    return this.carRepository.findPaginate(paginateParams, options);
  }

  getListOwned(paginateParams: ISearchPaginationParams, userId: number) {
    const options: FindManyOptions = {
      where: {
        user_id: userId,
      },
    };
    if (paginateParams.search) {
      options.where = {
        ...options.where,
        brand: Like(`%${paginateParams.search}%`),
      };
    }

    return this.carRepository.findPaginate(paginateParams, options);
  }

  async create(car: ICar) {
    return this.carRepository.save(car);
  }

  async getDetailById(id: number) {
    return this.carRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async deleteById(id: number, userId: number) {
    const carFound = await this.carRepository.findOne({
      where: {
        id: id,
        user_id: userId,
      },
    });
    if (!carFound) {
      throw new BadRequestException('Car Not Found');
    }
    carFound.softRemove();
    return {
      success: true,
    };
  }
}
