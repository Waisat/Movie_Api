import { Component, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
detailMovie: any= [];
  constructor(private TmdbService:ApiTmdbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailMovieDisplay()
  }


  detailMovieDisplay() {

    let index = this.route.snapshot.paramMap.get('id')

    this.TmdbService.getMovieById(index).subscribe(detail => {

      this.detailMovie= detail
      console.log(detail)


    })
  }
}
