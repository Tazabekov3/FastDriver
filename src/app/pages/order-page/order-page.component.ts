import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getOrderId:any;
  carInfo:any;
  orderInfo:any;

  ngOnInit(): void {
    this.getOrderId = this.param.snapshot.paramMap.get('id');
    console.log(this.getOrderId,'get-car');
    if(this.getOrderId)
    {
      this.carInfo =  this.service.carInfo.filter((value)=>{
          return value.id == this.getOrderId;
        });
        console.log(this.carInfo, 'order-info>>');

    }
  }
}
