import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCarListingDto {
  @IsInt()
  @IsNotEmpty()
  listing_id: number;
}
