"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_constant_1 = require("./constants/user.constant");
const user_entity_1 = require("./user.entity");
exports.userProviders = [
    {
        provide: user_constant_1.USER_CONST.MODEL_PROVIDER,
        useFactory: (connection) => connection.getRepository(user_entity_1.UserEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.providers.js.map