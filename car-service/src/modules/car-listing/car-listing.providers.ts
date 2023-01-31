import { DataSource } from 'typeorm';
import { CAR_LISTING_CONST } from './constants/car-listing.constant';
import { CarListingEntity } from './car-listing.entity';

export const carListingProviders = [
  {
    provide: CAR_LISTING_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(CarListingEntity),
    inject: ['DATA_SOURCE'],
  },
];
