import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './public/home/home.module';
import { PrincipalComponent } from './principal.component';
import { StoreModule } from './public/store/store.module';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    AdminModule,
    CommonModule,
    HomeModule,
    StoreModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
