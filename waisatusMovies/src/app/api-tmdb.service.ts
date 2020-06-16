import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiTmdbService {


  constructor(private http: HttpClient) { }
  page= "&page="
  language="&language=fr"
  url = "https://api.themoviedb.org/3/movie/76341?api_key="
  movieMoment="https://api.themoviedb.org/3/movie/now_playing?api_key="
  moviePopular="https://api.themoviedb.org/3/movie/popular/?api_key=/"
  movieDetail="https://api.themoviedb.org/3/movie/"
  searchByName="https://api.themoviedb.org/3/search/movie?api_key="
  querySearch="&query="


  getMovieMoment() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.movieMoment}`, httpOptions)
  }

  getpopularMovie(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.moviePopular}`+ this.page, httpOptions )

  }

  getMovieById(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.movieDetail}${id}`, httpOptions)

  }


  getPageMovieMoment(number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.movieMoment}/`+this.language + this.page+ `${number}` , httpOptions)

  }

  getImageCarousel(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.movieMoment} ` , httpOptions)

  }

  getMovieBySearch(movie){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.searchByName} `+ this.querySearch + `${movie}` , httpOptions)
  }


  getRandomMovie(number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
    return this.http.get(`${this.movieDetail}${number}`+this.language, httpOptions)

  }


  getGenres(id: any){

  }

  getMovieImg(imgId){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
        'Content-Type': 'application/json;charset=utf-8'
      })

    };
    return this.http.get(`${this.movieDetail}${imgId}/images`, httpOptions)
  }

 getMovieTrailer(idMovie){
   const httpOptions = {
     headers: new HttpHeaders({
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE1OGFiZGMyZGJmZTgzMDYzY2U5NGMzMzZiZDdiNSIsInN1YiI6IjVlYjA1ZjY5YmYwZjYzMDAxZDdlM2M5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUKif9mGbHgr1yWYDtACaNETbrn1KwxJggp2d1q-RKA',
       'Content-Type': 'application/json;charset=utf-8'
     })

   };
   return this.http.get(`${this.movieDetail}${idMovie}/videos`, httpOptions)

 }
}
