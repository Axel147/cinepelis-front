import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
