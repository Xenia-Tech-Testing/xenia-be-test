import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateListingDto {
  @IsString()
  @IsNotEmpty()
  start_at: Date;

  @IsString()
  @IsNotEmpty()
  end_at: Date;
}
