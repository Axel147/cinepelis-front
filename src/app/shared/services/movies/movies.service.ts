import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getAllMovies } from '@enviroments/enviroment';
import { MovieModel } from '@core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http:HttpClient) { }

  getMovies():Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(getAllMovies).pipe(catchError(this.hundlerUserError))
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
