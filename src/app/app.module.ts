import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CarListComponent,
    CarPageComponent,
    OrdersListComponent,
    OrderPageComponent,
    LoginPageComponent,
    CreateOrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
