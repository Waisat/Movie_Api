import { Component, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public totalPage: number;
  public pageArray: any=[];
  public tmdbNews: any =[];
  public urlImage: string= "https://image.tmdb.org/t/p/w500/"
  constructor(private TmdbService:ApiTmdbService) { }

  ngOnInit(): void {

    this.displayMovies()

  }

  displayMovies(){
    this.TmdbService.getMovieMoment().subscribe(data => {

      this.tmdbNews=data;
      this.totalPage= data['total_pages']
      this.generatePage(this.totalPage)


    })

  }



  generatePage(pages){

    for(let i=1; i<= pages; i++)
      this.pageArray.push(i)


    return this.pageArray
  }

}
