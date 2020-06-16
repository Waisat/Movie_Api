import { Component, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.scss']
})
export class PopularMovieComponent implements OnInit {

  public tmdbpopular: any = [];
  public thisId: any;
  public urlPopularImage: string= "https://image.tmdb.org/t/p/w500/"

  constructor(private TmdbService:ApiTmdbService) { }

  ngOnInit(): void {

    this.displayPopularMovies()
  }
  displayPopularMovies(){
    this.TmdbService.getpopularMovie().subscribe(data => {

      this.tmdbpopular=data;

      this.thisId= Object.keys(data['results'])

      console.log(data)

    })
  }
}
