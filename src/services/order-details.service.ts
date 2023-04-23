import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  carInfo = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      img: "../../../assets/img/toyota_camry.jpg",
      city: "Алматы",
      transmission: "автомат",
      volume: 1.6,
      fuelType: "бензин",
      rentingPrice: 9000,
      available: true
    }, {
      id: 22,
      brand: "Toyota",
      model: "Camry 2",
      img: "../../../assets/img/toyota_camry.jpg",
      city: "Алматы",
      transmission: "автомат",
      volume: 1.6,
      fuelType: "бензин",
      rentingPrice: 9000,
      available: true
    }, {
      id: 3,
      brand: "Toyota",
      model: "Camry 3",
      img: "../../../assets/img/toyota_camry.jpg",
      city: "Алматы",
      transmission: "автомат",
      volume: 1.6,
      fuelType: "бензин",
      rentingPrice: 9000,
      available: true
    }
  ]

  orderInfo = [
    {
      id: 1,
      carId: 1,
      time: 2,
    }
  ]
}
