import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middlewate';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from './modules/car/car.module';
import { CarListingModule } from './modules/car-listing/car-listing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    DatabaseModule,
    CarModule,
    CarListingModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
