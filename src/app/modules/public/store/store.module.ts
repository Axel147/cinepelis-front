import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './pages/store.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StoreModule { }
