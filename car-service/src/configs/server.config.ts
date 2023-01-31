import { INestApplication, VersioningType } from '@nestjs/common';
import { LoggerInterceptor } from '../common/interceptors/logger.interceptor';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { HttpExceptionFilter } from '../common/exception-filters/http-exception.filter';

export default function (app: INestApplication) {
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
    prefix: 'api/v',
  });
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
}
