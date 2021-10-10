import { Component, Input, OnInit } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { Post } from 'src/model/postable';

@Component({
  selector: 'article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input("post")
  post:Post|null=null;

  get thumbnailURI()
  {
    return this.post?this.post.thumbnail:null
  }
  constructor() { }

  ngOnInit(): void {
  }

}
