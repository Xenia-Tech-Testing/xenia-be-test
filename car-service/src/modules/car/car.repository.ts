import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from '../../database/base/repository.base';
import { Repository } from 'typeorm';
import { CAR_CONST } from './constants/car.constant';
import { CarEntity } from './car.entity';

@Injectable()
export class CarRepository extends BaseRepository<CarEntity> {
  constructor(
    @Inject(CAR_CONST.MODEL_PROVIDER)
    carRepository: Repository<CarEntity>,
  ) {
    super(carRepository);
  }
}
