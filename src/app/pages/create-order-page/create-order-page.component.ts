import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css']
})
export class CreateOrderPageComponent {
  constructor(private service:OrderDetailsService) { }

  carInfo:any;

  ngOnInit(): void {
    this.carInfo = this.service.carInfo;
  }
}
