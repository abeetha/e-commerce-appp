import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import { NgImageSliderModule } from 'ng-image-slider';
import { Image1Component } from './home/components/image1/image1.component';
import { Image2Component } from './home/components/image2/image2.component';
import { Image3Component } from './home/components/image3/image3.component';
import { Image4Component } from './home/components/image4/image4.component';
import { Image5Component } from './home/components/image5/image5.component';
import { Image6Component } from './home/components/image6/image6.component';
import { TodayDealsComponent } from './home/components/today-deals/today-deals.component';
import { CustomerServiceComponent } from './home/components/customer-service/customer-service.component';
import { GiftCardsComponent } from './home/components/gift-cards/gift-cards.component';
import { LoginComponent } from './home/components/login/login.component';
import { RegisterComponent } from './home/components/register/register.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'image1', component: Image1Component },
  { path: 'image2', component: Image2Component },
  { path: 'image3', component: Image3Component },
  { path: 'image4', component: Image4Component },
  { path: 'image5', component: Image5Component },
  { path: 'image6', component: Image6Component },
  { path: 'today-deals', component: TodayDealsComponent },
  { path: 'customer-service', component: CustomerServiceComponent },
  { path: 'gift-cards', component: GiftCardsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Image1Component,
    Image2Component,
    Image3Component,
    Image4Component,
    Image5Component,
    Image6Component,
    TodayDealsComponent,
    CustomerServiceComponent,
    GiftCardsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
