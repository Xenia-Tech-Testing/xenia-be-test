import { SortOrder } from 'src/database/interfaces/pagination.interface';
export declare class QueryParamDto {
    page: number;
    pageSize: number;
    search: string;
    sortBy: string;
    sortOrder: SortOrder;
}
export declare class ParamIdDto {
    id: string;
}
