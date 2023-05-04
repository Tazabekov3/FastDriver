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
      isAvailable: true
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
      isAvailable: true
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
      isAvailable: false
    }
  ]

  orderInfo = [
    {
      id: 1,
      carId: 1,
      time: 2,
    }
  ]

  createOrder(orderedCarId: number, hours: number): void {
    var newId = this.orderInfo[this.orderInfo.length - 1].id + 1;
    this.orderInfo.push(
      {
        id: newId,
        carId: orderedCarId,
        time: hours
      }
    )
  }

  cancelOrder(orderId: number):void {
    this.orderInfo = this.orderInfo.filter(item => item.id !== orderId);
  }
}
