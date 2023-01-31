import { BadRequestException, Injectable } from '@nestjs/common';
import { ISearchPaginationParams } from 'src/database/interfaces/pagination.interface';
import { ICarListingCreate, ICarListingUpdate } from './car-listing.interface';
import { CarListingRepository } from './car-listing.repository';

@Injectable()
export class CarListingService {
  constructor(private carListingRepository: CarListingRepository) {}

  async create(car: ICarListingCreate) {
    return this.carListingRepository.save(car);
  }

  getList(paginateParams: ISearchPaginationParams) {
    const conditions: string[] = [];

    if (paginateParams.search) {
      conditions.push(`car.model like "%${paginateParams.search}%"`);
    }

    if (paginateParams.date) {
      conditions.push(`cl.start_at <= "${paginateParams.date}"`);
      conditions.push(`cl.end_at >= "${paginateParams.date}"`);
    }

    if (paginateParams.priceFrom) {
      conditions.push(`cl.price >= "${paginateParams.priceFrom}"`);
    }

    if (paginateParams.priceTo) {
      conditions.push(`cl.price <= "${paginateParams.priceTo}"`);
    }
    return this.carListingRepository.findAllByConditionsAndCount(conditions, paginateParams);
  }

  async getDetailById(id: number) {
    return this.carListingRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        car: true,
      },
    });
  }

  async updateById(id: number, carListing: ICarListingUpdate) {
    const carListingFound = await this.carListingRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!carListingFound) {
      throw new BadRequestException('Car listing not found');
    }

    carListingFound.start_at = carListing.start_at;
    carListingFound.end_at = carListing.end_at;
    carListingFound.save();
    return {
      success: true,
    };
  }

  async deleteById(id: number) {
    const carFound = await this.carListingRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!carFound) {
      throw new BadRequestException('Car listing Not Found');
    }
    carFound.softRemove();
    return {
      success: true,
    };
  }

  async rentCar(id: number, userId: number) {
    const carListingFound = await this.carListingRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        car: true,
      },
    });

    if (!carListingFound) {
      throw new BadRequestException('Car listing not found');
    }
    if (carListingFound.car.user_id == userId) {
      throw new BadRequestException('Can not rent your car');
    }
    if (carListingFound.user_rent) {
      throw new BadRequestException('Car has rent');
    }
    carListingFound.user_rent = userId;
    carListingFound.save();
    return {
      success: true,
    };
  }
}
