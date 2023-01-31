import { BaseEntity, DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IPagination, IPaginationParams } from '../interfaces/pagination.interface';
export declare class BaseRepository<T extends BaseEntity> {
    repository: Repository<T>;
    constructor(repository: Repository<T>);
    create(data?: DeepPartial<T>): T;
    save(data: DeepPartial<T>): Promise<T>;
    saveMultiple(data: T[]): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
    findAll(options?: FindManyOptions<T>): Promise<T[]>;
    findPaginate(paginationParams?: IPaginationParams, options?: FindManyOptions): Promise<IPagination<T>>;
    update(criteria: string | number | string[] | Date | number[] | Date[] | FindOptionsWhere<T>, data: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
    delete(criteria: string | number | string[] | Date | number[] | Date[] | FindOptionsWhere<T>): Promise<DeleteResult>;
}
