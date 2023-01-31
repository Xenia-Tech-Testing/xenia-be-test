import { Logger } from '@nestjs/common';
import 'winston-daily-rotate-file';
export declare class CommonLogger extends Logger {
    private winstonLogger;
    constructor(context?: string);
    customError(message: string, stack: string, extendMessage?: string): void;
    customInfo(message: string, extendMessage?: string): void;
}
