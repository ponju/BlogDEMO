import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class ArticlePageComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
