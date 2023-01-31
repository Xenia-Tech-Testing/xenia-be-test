import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserTable1673622746715 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
