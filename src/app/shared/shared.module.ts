import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgBrokenDirective } from './directives/img-broken/img-broken.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
