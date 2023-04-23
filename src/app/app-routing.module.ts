import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'cars', component:CarListComponent},
  {path: 'cars/:id', component:CarPageComponent},
  {path: 'orders', component:OrdersListComponent},
  {path: 'orders/:id', component:OrderPageComponent},
  {path: 'login', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
