import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kinoman';
  filterText = "";
  hideen = false;
  isTrue:boolean= false;
  constructor(){}

  find(){
    console.log(this.filterText)
  }


  showBlock(){
    if(!this.isTrue){
      this.isTrue = true;
    }
    else{
      this.isTrue = false;
    }

    console.log(this.isTrue)
  }

  //Ссылка на веб страницу видео http://zon.lordfilmtv.cyou/2051-smotret-onlayn-igra-molli-2017-besplatno-v-horoshem-kachestve-hd-720.html
  //http://filmix.zogonka.org/video/34627-13_ono-2017-online.html

}
