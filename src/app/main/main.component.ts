import { Component, OnInit } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import { Observable, of, pipe, Subscription } from 'rxjs';

import { Genre, Movie } from '../shared/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  movies$: Observable<Movie[]>;
  page = 1
  totalLength: any;
  length: number | any;
  filterText: string = "";
  genres: Genre[] = [];
  genre: string | undefined
  mainMovies: Movie[] = [];
  file: File | null = null;
  isTrue: boolean = false;
  fileValue:string;
  sub:Subscription;
  constructor(private http: DataService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

  //Get Movies Data
  getMovies(): void {
    this.movies$ = this.http.getData().pipe(tap(data => this.mainMovies = data));
  }

  //Get Genre Types
  getGenres() {
    this.http.getGenres().subscribe((data: any) => {
      for (let item of data) {
        this.genres.push(item);
      }
    })
  }

  //Filter Types
  getGenre(genre: string): void {
    const movies = genre === "Все" ? this.mainMovies : this.mainMovies.filter(movie => movie.genre.includes(genre))
    this.movies$ = of(movies);
  }

  showBlock() {
    this.isTrue = true;
  }

  removeData(id:number){
    
  }




}
