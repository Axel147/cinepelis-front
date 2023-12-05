import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreModel } from '@core/models/store.model';
import { getAllCombos } from '@enviroments/enviroment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombosService {
  
  constructor(private http:HttpClient) { }

  getCombos():Observable<StoreModel[]>{
    return this.http.get<StoreModel[]>(getAllCombos).pipe(catchError(this.hundlerUserError))
  }

  hundlerUserError(error: any):Observable<never>{
    let msg = "error"
    if(error){
      msg = `Error ${error.message}`;
      console.error(msg);
    }
    return throwError(()=> (msg));
    
  }
}
