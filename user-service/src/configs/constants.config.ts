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

export const GOOGLE_OAUTH_CONFIG = {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  SECRET: process.env.GOOGLE_SECRET,
  CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
};
