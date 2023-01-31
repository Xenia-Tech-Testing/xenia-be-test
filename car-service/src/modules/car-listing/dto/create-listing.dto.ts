import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateCarListingDto {
  @IsInt()
  @IsNotEmpty()
  car_id: number;

  @IsString()
  @IsNotEmpty()
  start_at: string;

  @IsString()
  @IsNotEmpty()
  end_at: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;
}
