import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { ISearchFilterPaginationParams } from './user.interface';
import { Auth } from 'googleapis';
export declare class UserService {
    private userRepository;
    private readonly jwtService;
    oauthClient: Auth.OAuth2Client;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    login(accessToken: string): Promise<{
        accessToken: string;
    }>;
    getList(paginateParams: ISearchFilterPaginationParams): Promise<import("../../database/interfaces/pagination.interface").IPagination<import("./user.entity").UserEntity>>;
}
