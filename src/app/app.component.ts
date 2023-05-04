import { Component } from '@angular/core';
import { Car, Order } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fast Driver';

  cars: Car[] = [];
  orders: Order[] = [];

  ngOnInit() {

  }
}
