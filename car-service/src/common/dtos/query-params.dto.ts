import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsMongoId, IsNotEmpty, IsEnum } from 'class-validator';
import { SortOrder } from 'src/database/interfaces/pagination.interface';

export class QueryParamDto {
  @IsOptional()
  page: number;

  @IsOptional()
  pageSize: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  search: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  date: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  priceFrom: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  priceTo: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  sortBy: string;

  @IsString()
  @IsOptional()
  @IsEnum(['desc', 'asc'])
  @Transform(({ value }) => value.trim())
  sortOrder: SortOrder;
}

export class ParamIdDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  id: string;
}
