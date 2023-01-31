import { ValidationPipe as BaseValidationPipe, ArgumentMetadata, ValidationPipeOptions } from '@nestjs/common';
export declare class ValidationPipe extends BaseValidationPipe {
    constructor(options?: ValidationPipeOptions);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
