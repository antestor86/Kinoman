import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { from, Observable } from "rxjs";
import { tap, map, filter } from 'rxjs/operators';

import { Movie, Genre } from "../shared/models";


@Injectable({ providedIn: 'root' })
export class DataService {
  movies:Movie[]
  constructor(private http: HttpClient) { }

  getData(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:3000/movies")
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>("http://localhost:3000/genres")
  }

  getById(id: number): Observable<Movie> {
    return this.getData().pipe(
      map((value: Movie[]) => value.find((item: Movie) => item.id == id))
    );
  }

  setData(movie: Movie){
    const body = {
      title:movie.title,
      year:movie.year,
      genre:movie.genre,
      desc:movie.desc,
      country:movie.country,
      rate:movie.rate,
      poster:movie.poster,
      link:movie.link
    }
    return this.http.post<Movie>("http://localhost:3000/movies", body)
  }

  deleteData(id:number):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/movies/item/${id}`)
}
}


/* {
  id: number;
  title: string;
  year: number;
  genre: string;
  country: string;
  rate: string;
  poster: string;
}*/
