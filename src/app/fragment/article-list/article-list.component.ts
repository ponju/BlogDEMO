import { Component, Input, OnInit } from '@angular/core';
import { Post, Postable } from 'src/model/postable';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input()
  posts?:Postable[]
  constructor() { }

  ngOnInit(): void {
  }

}
