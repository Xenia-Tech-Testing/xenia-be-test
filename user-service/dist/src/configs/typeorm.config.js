"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const constants_config_1 = require("./constants.config");
const options = {
    type: constants_config_1.databaseConfig.TYPE,
    host: constants_config_1.databaseConfig.HOST,
    port: constants_config_1.databaseConfig.PORT,
    username: constants_config_1.databaseConfig.USERNAME,
    password: constants_config_1.databaseConfig.PASSWORD,
    database: constants_config_1.databaseConfig.DATABASE,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    migrations: [__dirname + '/../../migrations/*.{ts,js}'],
    synchronize: false,
    factories: [__dirname + '/../**/*.factory.{ts,js}'],
    seeds: [__dirname + '/../database/seeders/*.seeder.{ts,js}'],
};
exports.default = new typeorm_1.DataSource(options);
//# sourceMappingURL=typeorm.config.js.map