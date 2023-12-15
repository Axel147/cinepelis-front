import { Component } from '@angular/core';
import { StoreModel } from '@core/models/store.model';
import { CandyService } from '@shared/services/candy/candy.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  productos: StoreModel[] = [];
  
  constructor(private candyServices: CandyService){ }

  ngOnInit():void{
    this.getAllProductos();
  }

  getAllProductos(){
    this.candyServices.getProductos().subscribe(data => {
      this.productos = data
    },error => {console.log(error)});
  }
  
}
