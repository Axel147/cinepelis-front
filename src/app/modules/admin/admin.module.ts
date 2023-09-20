import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddMovieService } from '@shared/services/addMovie/add-movie.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    AddMovieService
  ]
})
export class AdminModule { }
