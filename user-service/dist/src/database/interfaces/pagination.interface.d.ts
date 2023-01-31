export interface IPagination<T> {
    data: T[];
    page: number;
    pageSize: number;
    totalPage: number;
    totalItem: number;
    next?: string;
    hashNext?: boolean;
    previous?: string;
    hashPrevious?: boolean;
}
export interface IPaginationParams {
    page?: number;
    pageSize?: number;
    sortOrder?: SortOrder;
    sortBy?: string;
}
export declare enum SortOrder {
    DESC = "desc",
    ASC = "asc"
}
export interface ISearchPaginationParams extends IPaginationParams {
    search?: string;
}
