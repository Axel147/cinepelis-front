import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddMovieModel } from '@core/models/addMovie.model';
import { addMovie } from '@enviroments/enviroment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {

  constructor(private http: HttpClient) { }

  addMovie(formData: AddMovieModel):Observable<AddMovieModel> {
    // Realiza una solicitud HTTP POST al endpoint de tu backend
    return this.http.post<AddMovieModel>(addMovie, formData).pipe(catchError(this.hundlerUserError));
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
