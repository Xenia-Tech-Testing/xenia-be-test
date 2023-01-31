import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserTable1675100233344 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
