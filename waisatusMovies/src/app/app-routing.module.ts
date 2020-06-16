import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {PopularMovieComponent} from "./popular-movie/popular-movie.component";
import {DetailMovieComponent} from "./detail-movie/detail-movie.component";
import {PageNewestMoviesComponent} from "./page-newest-movies/page-newest-movies.component";
import {NewestDetailComponent} from "./newest-detail/newest-detail.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: 'home', component: MoviesListComponent },
  { path: 'popular', component: PopularMovieComponent },
  { path: 'detail/:id', component: DetailMovieComponent},
  { path: 'detail_new/:id', component: NewestDetailComponent},
  { path: 'page/:id', component: PageNewestMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoviesListComponent, PopularMovieComponent, DetailMovieComponent,PageNewestMoviesComponent,NewestDetailComponent]
