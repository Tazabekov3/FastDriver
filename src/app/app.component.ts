import { Component } from '@angular/core';
import { Car, Order } from './models';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fast Driver';

  cars: Car[] = [];
  orders: Order[] = [];

  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.orderDetailsService.getCars().subscribe();
  }
}
