import { Component } from '@angular/core';
import { StoreModel } from '@core/models/store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  combos: StoreModel[] = [];
  
  
}
