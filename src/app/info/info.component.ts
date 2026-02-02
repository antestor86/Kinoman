import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators'
import { DataService } from '../services/data.service';
import { Movie } from "../shared/models"
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(private route: ActivatedRoute, private data: DataService, public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.movie$ = this.initId().pipe(switchMap(id => this.getItem(id)));
  }

  initId(): Observable<number> {
    return this.route.paramMap.pipe(
      map(params => +params.get('id'))
    )
  }

  getItem(id: number): Observable<Movie> {
    return this.data.getById(id);
  }
}
