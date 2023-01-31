"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidationPipe = class ValidationPipe extends common_1.ValidationPipe {
    constructor(options) {
        super(options);
    }
    async transform(value, metadata) {
        var _a;
        try {
            return await super.transform(value, metadata);
        }
        catch (error) {
            throw new common_1.HttpException({
                message: 'Unprocessable Entity',
                errors: ((_a = error.response) === null || _a === void 0 ? void 0 : _a.message) || error.message,
                statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
};
ValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map