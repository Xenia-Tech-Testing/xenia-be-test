import { BaseRepository } from '../../database/base/repository.base';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserRepository extends BaseRepository<UserEntity> {
    constructor(userRepository: Repository<UserEntity>);
}
