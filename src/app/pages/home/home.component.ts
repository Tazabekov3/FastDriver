import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:OrderDetailsService) { }

  carInfo:any;

  ngOnInit(): void {
    this.carInfo = this.service.carInfo;
  }
}
