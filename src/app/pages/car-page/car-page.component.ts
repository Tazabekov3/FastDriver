import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/services/order-details.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getCarId:any;
  carInfo:any;

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
}
