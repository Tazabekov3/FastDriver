import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  constructor(private service:OrderDetailsService) { }

  carInfo:any;

  ngOnInit(): void {
    this.carInfo = this.service.carInfo;
  }
}
