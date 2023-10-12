import { Component } from '@angular/core';
import { MovieModel } from '@core/models/movie.model';
import { MoviesService } from '@shared/services/movies/movies.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'frontend';
  movies: MovieModel[] = [];
  
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    navigation: true,
    pagination:false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      reverseDirection: true
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
      1680: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 4,
      }
    }
  }

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
