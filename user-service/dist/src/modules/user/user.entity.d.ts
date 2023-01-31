import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
