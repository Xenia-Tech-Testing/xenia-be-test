export interface ICarListingCreate {
  car_id: number;
  start_at: string;
  end_at: string;
  price: number;
}

export interface ICarListingUpdate {
  start_at: Date;
  end_at: Date;
}
