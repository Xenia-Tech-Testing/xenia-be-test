import { ISearchPaginationParams } from 'src/database/interfaces/pagination.interface';

export interface JwtPayload {
  sub?: number;
  email?: string;
}

export interface ICreateUser {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  type: string;
  dob: string;
}

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  type: string;
  dob: string;
}

export interface ISearchFilterPaginationParams extends ISearchPaginationParams {
  type: string;
}
