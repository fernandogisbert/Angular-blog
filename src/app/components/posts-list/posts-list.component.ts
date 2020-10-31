import { Component, OnInit } from '@angular/core';
import { AllArticlesService } from 'src/app/services/all-articles.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private todosarticulos: AllArticlesService) {

  }

  publicaciones:any = this.todosarticulos.getInfo();

  ngOnInit(): void {
  }

}
