import { Component, OnInit } from '@angular/core';
import {ApiTmdbService} from "../api-tmdb.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
headerData: any = [];
urlPopularImage: string= "https://image.tmdb.org/t/p/w500/";
  randomData: any=[];
 public randomNumber: number;
 public randomArray: any=[];
 public stockRandom:any=[];
  constructor(private TmdbService:ApiTmdbService) { }

  ngOnInit(): void {
    this.getImageHeader();
    this.getRandom(this.RandomId())




  }




  getImageHeader(){
    this.TmdbService.getpopularMovie().subscribe(data => {

      this.headerData=data;

      console.log(data)

    })
  }
  RandomId(){

    this.randomNumber=Math.round(Math.random() * (35000 - 10000) + 10000);



return this.randomNumber
  }


  getRandom(number){

    setInterval(this.RandomId, 5000)
    this.TmdbService.getRandomMovie(number).subscribe(data => {

      this.randomData=data;

      this.randomArray.push(this.randomData);
      console.log(this.randomArray)
      console.log("resultatRandom",data)

    })
  }



}
