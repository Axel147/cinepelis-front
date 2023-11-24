import { Component } from '@angular/core';
import { MovieModel } from '@core/models/movie.model';
import { MoviesService } from '@shared/services/movies/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
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
