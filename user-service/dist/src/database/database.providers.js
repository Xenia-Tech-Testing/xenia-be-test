"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_config_1 = require("../configs/typeorm.config");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => typeorm_config_1.default.initialize(),
    },
];
//# sourceMappingURL=database.providers.js.map