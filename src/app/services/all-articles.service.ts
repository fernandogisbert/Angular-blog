import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllArticlesService {

  info:[]=[];

  allInfo: any[]=[] ;

  constructor() {
    this.info = [];
    // console.log('array del servicio',this.info);
    // console.log('este es el array supremo', this.allInfo);
  }

  getInfo(): string[] {
    return this.info;
  }

  // allArticles(): any[]{

  //  return this.allInfo;
  // }

 
}


