import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  constructor(private service:OrderDetailsService) { }

  carInfo:any;
  orderInfo:any;

  ngOnInit(): void {
    this.carInfo = this.service.carInfo;
    this.orderInfo = this.service.orderInfo;
  }
}
