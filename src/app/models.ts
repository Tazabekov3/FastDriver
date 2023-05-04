export interface Car {
  id: number;
  brand: string;
  model: string;
  city: string;
  transmission: string;
  volume: number;
  fuelType: string;
  rentingPrice: number;
  available: boolean;
}

export interface Order {
  id: number;
  carId: number;
}
