"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const logger_interceptor_1 = require("../common/interceptors/logger.interceptor");
const validation_pipe_1 = require("../common/pipes/validation.pipe");
const http_exception_filter_1 = require("../common/exception-filters/http-exception.filter");
function default_1(app) {
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ['1'],
        prefix: 'api/v',
    });
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe({ whitelist: true }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
}
exports.default = default_1;
//# sourceMappingURL=server.config.js.map