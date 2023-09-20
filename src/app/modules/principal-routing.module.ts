import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './public/home/pages/home-page.component';
import { PrincipalComponent } from './principal.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';

const routes: Routes = [
  {
    path:'', component: PrincipalComponent,
    children: [
      { path: '', redirectTo: "home", pathMatch: "full"},
      { path: "home", component: HomePageComponent },
      { path:'add-movie', component: AddMovieComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
