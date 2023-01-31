import { DataSource } from 'typeorm';
import { UserEntity } from './user.entity';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: DataSource) => import("typeorm").Repository<UserEntity>;
    inject: string[];
}[];
