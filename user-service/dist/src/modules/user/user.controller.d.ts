import { LoginDto } from './dto/login.dto';
import { QueryParamUserDto } from './dto/query-param.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getList(queryParamDto: QueryParamUserDto): Promise<import("../../database/interfaces/pagination.interface").IPagination<import("./user.entity").UserEntity>>;
    login(body: LoginDto): Promise<{
        accessToken: string;
    }>;
}
