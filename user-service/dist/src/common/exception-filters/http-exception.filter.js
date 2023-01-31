"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const common_logger_1 = require("../loggers/common.logger");
const common_error_constant_1 = require("../constants/errors/common-error.constant");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor() {
        this.logger = new common_logger_1.CommonLogger(HttpExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus() || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception.message || common_error_constant_1.COMMON_ERROR.COMMON_SYSTEM_ERROR.MESSAGE;
        if (status == common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            const log = {
                path: request.path,
                ipAddress: request.headers['x-forwarded-for'] || request.ip,
                method: request.method,
                error: exception,
            };
            const errorMessage = `${request.method} ${request.originalUrl} - MESSAGE: ${message}`;
            const detailMessage = `- DETAIL: ${JSON.stringify(log)}`;
            this.logger.customError(errorMessage, exception.stack, detailMessage);
        }
        else {
            const errorMessage = `${request.method} ${request.originalUrl} - MESSAGE: ${message}`;
            const detailMessage = `- DETAIL: ${JSON.stringify(exception.getResponse())}`;
            this.logger.customInfo(errorMessage, detailMessage);
        }
        response.status(status).json({
            path: request.url,
            message: status == common_1.HttpStatus.INTERNAL_SERVER_ERROR ? common_error_constant_1.COMMON_ERROR.COMMON_SYSTEM_ERROR.MESSAGE : message,
            code: exception.getResponse()['code'] || common_error_constant_1.COMMON_ERROR.COMMON_SYSTEM_ERROR.CODE,
            errors: exception.getResponse()['errors'],
            statusCode: status,
        });
    }
};
HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map