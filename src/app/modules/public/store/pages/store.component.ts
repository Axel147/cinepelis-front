import { Component } from '@angular/core';
import { StoreModel } from '@core/models/store.model';
import { CombosService } from '@shared/services/combos/combos.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  combos: StoreModel[] = [];
  
  constructor(private combosServices: CombosService){ }

  ngOnInit():void{
    this.getAllCombos();
  }

  getAllCombos(){
    this.combosServices.getCombos().subscribe(data => {
      this.combos = data
    },error => {console.log(error)});
  }
}
