import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddMovieService } from '@shared/services/addMovie/add-movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  formulario!: FormGroup;
  
  constructor(private addMovieService: AddMovieService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      titulo:[""],
      descripcion:[""],
      portada:[""],
      trailer:[""],
      clasificacion:[""],
      genero:[""],
      duracion:[""],
      elenco:[""],
      director:[""]
    })
  }
  onSubmit(){
    this.addMovieService.addMovie(this.formulario.value)
    .subscribe((response) => {
      console.log("Respuesta backend: ", response);
    },(error) => {
      console.error(error)
    })
  }

}
