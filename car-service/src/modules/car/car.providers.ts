import { DataSource } from 'typeorm';
import { CAR_CONST } from './constants/car.constant';
import { CarEntity } from './car.entity';

export const carProviders = [
  {
    provide: CAR_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(CarEntity),
    inject: ['DATA_SOURCE'],
  },
];
