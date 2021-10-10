import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ArchiveContext } from 'src/model/archivesContext';
import { ArchiveContextService } from 'src/app/service/archive-context.service';
import { ARCHIVES_ROOT, ARCHIVE_SIZE, ARTICLE_ROOT } from 'src/model/settings/archiveConfig';

@Component({
  selector: 'archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})

export class ArchivePageComponent implements OnInit {
  context$!: Observable<ArchiveContext>

  classify?: string;
  group?: string;
  page?: number;

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
    private route: ActivatedRoute, private archiveService: ArchiveContextService
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
          this.context$ = this.archiveService.getPlaneArchive$(ARTICLE_ROOT, ARCHIVES_ROOT, ARCHIVE_SIZE);
        } else {
        }

        this.classify = newClass;
        this.group = newGroup;
        this.page = newPage;
      }
    )
  }
}