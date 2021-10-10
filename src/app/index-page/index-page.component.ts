import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ArchiveContext } from 'src/model/archivesContext';
import { ArchiveContextService } from 'src/app/service/archive-context.service';
import { ARCHIVES_ROOT, ARCHIVE_SIZE, ARTICLE_ROOT } from 'src/model/settings/archiveConfig';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})

export class IndexPageComponent implements OnInit {
  context$?: Observable<ArchiveContext> = this.archiveService.getPlaneArchive$(ARTICLE_ROOT, ARCHIVES_ROOT, ARCHIVE_SIZE)

  classify?: string;
  group?: string;
  page?: number;

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
    private route: ActivatedRoute, private archiveService: ArchiveContextService,
  ) {
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
            this.context$ = this.archiveService.getPlaneArchive$(ARTICLE_ROOT, ARCHIVES_ROOT, ARCHIVE_SIZE)
          } else {
          }
        }
        if (newPage == undefined) {
          newPage = 0;
        }

        this.classify = newClass;
        this.group = newGroup;
        this.page = newPage;
      }
    )
  }
}