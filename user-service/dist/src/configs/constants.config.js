"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOOGLE_OAUTH_CONFIG = exports.databaseConfig = exports.jwtConfig = exports.NODE_ENV = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.NODE_ENV = process.env.NODE_ENV;
exports.jwtConfig = {
    SECRET: process.env.TOKEN_SECRET,
    EXPIRED_IN: process.env.TOKEN_EXPIRED_IN,
};
exports.databaseConfig = {
    TYPE: process.env.DB_TYPE || 'mysql',
    HOST: process.env.DB_HOST || 'localhost',
    PORT: +process.env.DB_PORT || 5432,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_DATABASE_NAME,
};
exports.GOOGLE_OAUTH_CONFIG = {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    SECRET: process.env.GOOGLE_SECRET,
    CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
};
//# sourceMappingURL=constants.config.js.map