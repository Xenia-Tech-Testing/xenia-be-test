import { carProviders } from './car.providers';
import { CarRepository } from './car.repository';
import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CarController],
  providers: [...carProviders, CarRepository, CarService],
  exports: [CarService],
})
export class CarModule {}
