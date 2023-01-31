import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from '../../database/base/repository.base';
import { Repository } from 'typeorm';
import { CAR_LISTING_CONST } from './constants/car-listing.constant';
import { CarListingEntity } from './car-listing.entity';
import { ISearchPaginationParams } from 'src/database/interfaces/pagination.interface';

@Injectable()
export class CarListingRepository extends BaseRepository<CarListingEntity> {
  constructor(
    @Inject(CAR_LISTING_CONST.MODEL_PROVIDER)
    carListingRepository: Repository<CarListingEntity>,
  ) {
    super(carListingRepository);
  }

  async findAllByConditionsAndCount(conditions: any, paginateParams: ISearchPaginationParams) {
    const page = paginateParams.page && paginateParams.page > 0 ? Number(paginateParams.page) : 1;
    const pageSize = paginateParams.pageSize && paginateParams.pageSize > 0 ? Number(paginateParams.pageSize) : 20;
    const sortBy = paginateParams.sortBy ? paginateParams.sortBy : 'created_at';
    const found = await this.repository
      .createQueryBuilder('cl')
      .leftJoinAndSelect('cl.car', 'car')
      .where(conditions.join(' AND '))
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .orderBy(`cl.${sortBy}`, paginateParams.sortOrder == 'desc' ? 'DESC' : 'ASC')
      .getMany();

    const total = await this.repository
      .createQueryBuilder('cl')
      .leftJoinAndSelect('cl.car', 'car')
      .where(conditions.join(' AND '))
      .getCount();

    const totalPage = total % pageSize == 0 ? total / pageSize : Math.floor(total / pageSize) + 1;
    return {
      data: found,
      total: total,
      page: page,
      pageSize: pageSize,
      totalPage: totalPage,
    };
  }
}
