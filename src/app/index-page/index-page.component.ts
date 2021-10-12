import { AfterContentChecked, AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ArchiveContextService } from 'src/app/service/archive-context.service';
import { ARCHIVES_ROOT, ARCHIVE_SIZE, ARTICLE_ROOT } from 'src/app/settings/archive.config';
import { ArchiveContext } from 'src/model/archivesContext';
import { HeadSetupService } from '../service/head-setup.service';
import { SITE_NAME, SITE_NAME_JP, SITE_ROOT_URL } from '../settings/site-profile';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})

export class IndexPageComponent implements OnInit ,AfterContentInit{
  context$?: Observable<ArchiveContext>=this.archiveService.getPlaneArchiveContext$()

  classify?: string;
  group?: string;
  page?: number;

  get indexing() {
    if (this.classify == undefined || this.group == undefined) {
      return "Archives";
    } else {
      return `${this.classify}>${this.group}`
    }
  }

  get homeUrl() {
    if (this.classify == undefined || this.group == undefined) {
      return `${ARCHIVES_ROOT}/0`
    } else {
      return `${ARCHIVES_ROOT}/${this.classify}/${this.group}/0`;
    }
  }

get  from():number{
  if(this.page==undefined){
    this.page=0
  }
  return ARCHIVE_SIZE*this.page;
}
get till(){
    return this.from+ARCHIVE_SIZE;
}

  constructor(
    private route: ActivatedRoute, private archiveService: ArchiveContextService, private _head:HeadSetupService
  ) {
  }
  ngAfterContentInit(): void {
    this._head.setupHeadElement(
      {
        title:SITE_NAME_JP,
        description:"",
        pageType:"website",
        url:SITE_ROOT_URL
      }
    )
  }

  ngOnInit(): void {
    let params = this.route.params.subscribe(
      (parameters) => {
        let newClass: string | undefined = parameters.classify;
        let newGroup: string | undefined = parameters.group;
        let newPage: number | undefined = parameters.page;

        if (newClass != this.classify || newGroup != this.group) {
          if (newClass == undefined || newGroup == undefined) {
            newClass = undefined;
            newGroup = undefined;
            this.context$ = this.archiveService.getPlaneArchiveContext$(ARTICLE_ROOT,ARCHIVES_ROOT,ARCHIVE_SIZE)
          } else {
            this.context$ = this.archiveService.getClassifiedArchiveContext$(newClass, newGroup,ARTICLE_ROOT,ARCHIVES_ROOT,ARCHIVE_SIZE)
          }
        }
        if(newPage==undefined){
          newPage=0;
        }

        this.classify = newClass;
        this.group = newGroup;
        this.page = newPage;
      }
    )
  }
}