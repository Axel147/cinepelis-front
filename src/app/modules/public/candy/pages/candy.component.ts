import { Component } from '@angular/core';
import { StoreModel } from '@core/models/store.model';
import { CombosService } from '@shared/services/combos/combos.service';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.scss']
})
export class CandyComponent {
  combos: StoreModel[] = [];
  
  constructor(private combosService: CombosService){ }

  ngOnInit():void{
    this.getAllCombos();
  }

  getAllCombos(){
    this.combosService.getCombos().subscribe(data => {
      this.combos = data
    },error => {console.log(error)});
  }
}
