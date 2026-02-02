import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fileURLToPath } from 'url';
import { DataService } from '../services/data.service';
import { Movie } from '../shared/models';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  @Input()display:boolean = false;
  @Input()isTrue:boolean = true;
  addForm:FormGroup|any;
  movies:Movie[]|any;
  hidden:boolean=false;
  poster:string|undefined
  url = null;
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.initForm();
  }

  makeUrl(event){
    this.url = event.target.files[0]
    console.log(this.url)
  }

  initForm(){
    this.addForm = new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(3)]),
      year:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      rate:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern("^[0-9]*$")]),
      desc:new FormControl(null,[Validators.required]),
      genre:new FormControl('',Validators.required),
      poster:new FormControl("",[Validators.required]),
      link:new FormControl('',Validators.required)

    })
  }
    submit(){
      const formData = {...this.addForm.value};
      this.http.setData(formData).subscribe(movie=>{
        this.movies.push(movie);
        console.log(this.movies)
      })
      this.isTrue = false;
    }

    hideBlock(){
      if(!this.isTrue){
        this.isTrue = true
      }
      else{
        this.isTrue = false;
      }

    }

}
