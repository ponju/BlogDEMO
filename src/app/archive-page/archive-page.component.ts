import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ArchiveContextService } from 'src/app/service/archive-context.service';
import { ARCHIVES_ROOT, ARCHIVE_SIZE, ARTICLE_ROOT } from '../settings/archive.config';
import { SITE_NAME } from '../settings/site-profile';
import { HeadSetupContext, HeadSetupService } from '../service/head-setup.service';
import { ArchiveContext } from 'src/model/archivesContext';

@Component({
  selector: 'archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})

export class ArchivePageComponent implements OnInit, AfterContentInit {
  context$!: Observable<ArchiveContext>

  classify?: string;
  group?: string;
  page?: number;

  get indexing() {
    if (this.classify == undefined || this.group == undefined) {
      return "Archives"
    } else {
      return `${this.classify}:${this.group}`
    }
  }

  get homeUrl() {
    if (this.classify == undefined || this.group == undefined) {
      return "/archives/0"
    } else {
      return `/archives/${this.classify}/${this.group}/0`;
    }
  }

  get from(): number {
    if (this.page == undefined) {
      this.page = 0
    }

    return ARCHIVE_SIZE * this.page;
  }
  get till() {
    return this.from + ARCHIVE_SIZE;
  }

  constructor(
    private route: ActivatedRoute, private archiveService: ArchiveContextService,  private _head: HeadSetupService
  ) {
  }



  ngOnInit(): void {
    let snapshot = this.route.snapshot;

    let initialClazz: string | undefined = snapshot.params.classify
    let initialGroup: string | undefined = snapshot.params.initGroup
    let initialPage: number | undefined = snapshot.params.page;

    if (initialClazz == undefined || initialGroup == undefined) {
      initialClazz = undefined;
      initialGroup = undefined;
    }
    if (initialPage == undefined) {
      initialPage = 0;
    }

    this.classify = initialClazz;
    this.group = initialGroup;
    this.page = initialPage;

    let params = this.route.params.subscribe(
      (parameters) => {
        let newClass: string | undefined = parameters.classify;
        let newGroup: string | undefined = parameters.group;
        let newPage: number | undefined = parameters.page;

        if (newClass == undefined || newGroup == undefined) {
          newClass = undefined;
          newGroup = undefined;
          this.context$ = this.archiveService.getPlaneArchiveContext$(ARTICLE_ROOT, ARCHIVES_ROOT, ARCHIVE_SIZE);
        } else {
          this.context$ = this.archiveService.getClassifiedArchiveContext$(newClass, newGroup, ARTICLE_ROOT, ARCHIVES_ROOT, ARCHIVE_SIZE)
        }

        this.classify = newClass;
        this.group = newGroup;
        this.page = newPage;
      }
    )
  }

  
  ngAfterContentInit(): void {
    this.context$.forEach(archiveContext => {
      let title: string;
      let url: string;
      if (archiveContext.classify != undefined && archiveContext.group != undefined) {
        title = `${this.classify} > ${this.group} - ${this.page} | ${SITE_NAME}`
        url = `${SITE_NAME}/${this.classify}/${this.group}/${this.page}`
      } else {
        title = `${"Archives"} - ${this.page} | ${SITE_NAME}`
        url = `${SITE_NAME}${ARCHIVES_ROOT}/${this.page}`
      }
      const context: HeadSetupContext = {
        title: title,
        description: "アーカイブページ",
        pageType: "archives",
        url: url,
      }
      this._head.setupHeadElement(context);
    })
  }

}