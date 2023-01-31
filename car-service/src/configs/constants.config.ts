import { config } from 'dotenv';
config();

export const NODE_ENV = process.env.NODE_ENV;

export const jwtConfig = {
  SECRET: process.env.TOKEN_SECRET,
  EXPIRED_IN: process.env.TOKEN_EXPIRED_IN,
};

export const databaseConfig = {
  TYPE: process.env.DB_TYPE || 'mysql',
  HOST: process.env.DB_HOST || 'localhost',
  PORT: +process.env.DB_PORT || 5432,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_DATABASE_NAME,
};

export const userConfig = {
  DEFAUL_ADMIN_USER: process.env.DEFAUL_ADMIN_USER,
  DEFAUL_ADMIN_PASSWORD: process.env.DEFAUL_ADMIN_PASSWORD,
  SALT_ROUNDS: process.env.SALT_ROUNDS || 12,
};
