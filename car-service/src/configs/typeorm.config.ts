import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { databaseConfig } from './constants.config';

const options: DataSourceOptions & SeederOptions = {
  type: databaseConfig.TYPE as any,
  host: databaseConfig.HOST,
  port: databaseConfig.PORT,
  username: databaseConfig.USERNAME,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DATABASE,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../../migrations/*.{ts,js}'],
  synchronize: false,
  // seeder options
  factories: [__dirname + '/../**/*.factory.{ts,js}'],
  seeds: [__dirname + '/../database/seeders/*.seeder.{ts,js}'],
};

export default new DataSource(options);
