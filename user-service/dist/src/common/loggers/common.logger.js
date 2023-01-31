"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonLogger = void 0;
const common_1 = require("@nestjs/common");
const winston = require("winston");
require("winston-daily-rotate-file");
const { label, printf } = winston.format;
const loggerFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
class CommonLogger extends common_1.Logger {
    constructor(context) {
        super(context);
        const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
            filename: '%DATE%.log',
            dirname: './logs/',
            datePattern: 'YYYY-MM-DD',
            maxSize: '10m',
            maxFiles: '7d',
            format: winston.format.combine(label({ label: context || 'COMMON' }), winston.format.timestamp(), loggerFormat),
        });
        this.winstonLogger = winston.createLogger({
            transports: [dailyRotateFileTransport],
        });
    }
    customError(message, stack, extendMessage) {
        this.winstonLogger.error(message, { message: extendMessage });
        super.error(message, stack);
    }
    customInfo(message, extendMessage) {
        this.winstonLogger.info(message, { message: extendMessage });
        super.log(message);
    }
}
exports.CommonLogger = CommonLogger;
//# sourceMappingURL=common.logger.js.map