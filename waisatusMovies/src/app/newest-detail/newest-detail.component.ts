import { Component, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-newest-detail',
  templateUrl: './newest-detail.component.html',
  styleUrls: ['./newest-detail.component.scss']
})
export class NewestDetailComponent implements OnInit {
  pageMoviesDetail: any=[];
  imgDetailId: string;
  allimg: any=[];
  allTrailer: any=[];
  trailerYoutube=  'https://www.youtube.com/watch?v=';
  public urlDetailImg: string= "https://image.tmdb.org/t/p/w500/";
  constructor(private TmdbService:ApiTmdbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNewestDetails()

  }
  getNewestDetails(){
    let page = this.route.snapshot.paramMap.get('id')

    this.TmdbService.getMovieById(page).subscribe(detailPage => {

      this.pageMoviesDetail= detailPage
      this.imgDetailId= detailPage['id'];
      this.getAllImage(this.imgDetailId)
      this.getAllTrailer(this.imgDetailId)

      console.log(detailPage)


    })
  }

  getAllImage(id_movie){

    this.TmdbService.getMovieImg(id_movie).subscribe(detailimg => {

      this.allimg= detailimg


      console.log(this.allimg)


    })
    console.log(id_movie)

  }

  getAllTrailer(id_movie) {
    this.TmdbService.getMovieTrailer(id_movie).subscribe(trailer => {

      this.allTrailer = trailer


      console.log('trailer', this.allTrailer)
    })

  }
}
