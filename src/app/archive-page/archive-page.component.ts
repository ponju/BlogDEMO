import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArchiveContext } from 'src/model/archivesContext';
import { ArchivesContextService } from 'src/app/service/archives-context.service';
import { ARCHIVE_SIZE } from 'src/app/settings/archiveConfig';

@Component({
  selector: 'archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit {
  context$:Observable<ArchiveContext>

  constructor(private contextService:ArchivesContextService) { 
    this.context$=contextService.getPlaneArchive$(ARCHIVE_SIZE);
  }

  ngOnInit(): void {
    this.context$=this.contextService.getPlaneArchive$(ARCHIVE_SIZE)
  }
}
