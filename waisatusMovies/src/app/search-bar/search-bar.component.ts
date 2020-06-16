import { Component, OnInit } from '@angular/core';
import {MovieSearch} from "../class/movie-search";
import {ApiTmdbService} from "../api-tmdb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  seachMovieModel = new MovieSearch('')
  searchMovies: any=[];
  public search: any=[];
  public urlImage: string= "https://image.tmdb.org/t/p/w500/"
  constructor(private TmdbService:ApiTmdbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSearchMovies(){
    this.search= this.seachMovieModel.search

    this.TmdbService.getMovieBySearch(this.search).subscribe(data => {

      this.searchMovies=data;

      console.log(data)

    })

  }
}
