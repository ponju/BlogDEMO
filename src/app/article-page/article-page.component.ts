import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { highlight } from 'prismjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { HighlightService } from 'src/app/service/highlight.service';
import { Post } from 'src/model/post';

declare var ng: any;

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ArticlePageComponent implements OnInit,OnChanges {
  post$: Observable<Post> = this.scully.getCurrent().pipe(map((route,index)=>new Post(route)));
  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private highlight: HighlightService) {
  }
  ngOnInit(): void {
    this.highlight.init()
  }
  ngOnChanges():void{
    this.highlight.highlightAll();
  }
}
