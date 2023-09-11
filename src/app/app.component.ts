import { Component } from '@angular/core';
import { MoviesService } from '@shared/services/movies/movies.service';
import { MovieModel } from '@core/models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  movies: MovieModel[] = [];

  constructor(private moviesServices: MoviesService) {}

  ngOnInit():void{
    this.getAllMovies();
  }

  getAllMovies(){
    this.moviesServices.getMovies().subscribe(data => {
      this.movies = data
    },error => {console.log(error)});
  }
}
