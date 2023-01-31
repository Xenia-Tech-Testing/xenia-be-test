import { IsOptional, IsString } from 'class-validator';
import { QueryParamDto } from 'src/common/dtos/query-params.dto';

export class QueryParamUserDto extends QueryParamDto {
  @IsString()
  @IsOptional()
  type: string;
}
