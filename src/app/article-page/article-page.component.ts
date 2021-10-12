import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Inject, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ROUTES } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { highlight } from 'prismjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/operators';
import { HighlightService } from 'src/app/service/highlight.service';
import { Post } from 'src/model/post';
import { HeadSetupContext, HeadSetupService } from '../service/head-setup.service';
import { ARTICLE_ROOT } from '../settings/archive.config';
import { SITE_NAME, SITE_ROOT_URL } from '../settings/site-profile';

declare var ng: any;

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ArticlePageComponent implements OnInit, AfterContentInit, AfterViewChecked {
  post$: Observable<Post> = this.scully.getCurrent().pipe(map((route, index) => new Post(route)));
  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private _highlight: HighlightService, private _head: HeadSetupService) {
  }
  ngAfterViewChecked() {
    this._highlight.highlightAll();
  }
  ngAfterContentInit(): void {
    this._highlight.highlightAll();
    this.post$.forEach(post => {
      const context: HeadSetupContext = {
        title: `${post.title}  | ${SITE_NAME}`,
        description: post.summery == undefined ? "" : post.summery,
        pageType: "article",
        thumbnailURL: post.thumbnail,
        url: `https://${SITE_NAME}${post.path}`
      }
      this._head.setupHeadElement(context);
    })
  }

  ngOnInit(): void {
    this._highlight.init()

  }
}

