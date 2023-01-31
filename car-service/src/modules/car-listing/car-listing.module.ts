import { carListingProviders } from './car-listing.providers';
import { CarListingRepository } from './car-listing.repository';
import { Module } from '@nestjs/common';
import { CarListingController } from './car-listing.controller';
import { CarListingService } from './car-listing.service';

@Module({
  controllers: [CarListingController],
  providers: [...carListingProviders, CarListingRepository, CarListingService],
  exports: [CarListingService],
})
export class CarListingModule {}
