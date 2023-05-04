import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css']
})
export class CreateOrderPageComponent {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getCarId: any;
  carInfo: any;
  licenseId: string = '';
  rentingTime: number = 0;

  ngOnInit(): void {
    this.getCarId = this.param.snapshot.paramMap.get('id');
    console.log(this.getCarId,'get-car');
    if(this.getCarId)
    {
      this.carInfo =  this.service.carInfo.filter((value)=>{
          return value.id == this.getCarId;
        });
        console.log(this.carInfo, 'car-info>>');

    }

  }

  createOrder() {
    this.service.createOrder(this.getCarId, this.rentingTime);
    console.log('pushed');
  }
}
