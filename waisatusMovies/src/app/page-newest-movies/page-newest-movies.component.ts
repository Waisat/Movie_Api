import { Component, Input, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-newest-movies',
  templateUrl: './page-newest-movies.component.html',
  styleUrls: ['./page-newest-movies.component.scss']
})
export class PageNewestMoviesComponent implements OnInit {
  @Input() parentData;
  totalPage:string;
pageMovies: any=[];
  pageTab: any=[];
  public urlImage: string= "https://image.tmdb.org/t/p/w500/"
  constructor(private TmdbService:ApiTmdbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageNewestMovies()
  }

  pageNewestMovies(){
    let page = this.route.snapshot.paramMap.get('id')

    this.TmdbService.getPageMovieMoment(page).subscribe(detailPage => {

      this.pageMovies= detailPage
      this.totalPage= detailPage['total_pages']
      this.generatePage(this.totalPage)

      console.log(detailPage)


    })
  }


  generatePage(pages){

    for(let i=1; i<= pages; i++)
      this.pageTab.push(i)


    return this.pageTab
  }

  refresh(page){
    window.location.href = `page/${page}`;

  }


}
