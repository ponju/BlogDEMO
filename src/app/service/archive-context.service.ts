import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { ArchiveContext } from 'src/model/archivesContext';
import { Post, Postable } from 'src/model/postable';

const DEFAULT_ARTICLE_ROOT="/article"
const DEFAULT_ARCHIVE_ROOT="/archives"
const DEFAULT_ARCHIVE_SIZE=8;

@Injectable({
  providedIn: 'root'
})
export class ArchiveContextService
 {
  constructor(private scully:ScullyRoutesService) { }
  getPlaneArchive$(articleRoot=DEFAULT_ARTICLE_ROOT,archiveRoot=DEFAULT_ARCHIVE_ROOT,archiveSize:number=DEFAULT_ARCHIVE_SIZE,):Observable<ArchiveContext>{
    return this.scully.available$.pipe(
      map(
        (routeTable)=>{
          let archivePosts=routeTable.filter((route)=>route.published).map(r=>new Post(r) as Postable)
          const links:string[]=[];
          const countOfPost=archivePosts.length;
          const countOfArchive=Math.floor(countOfPost/archiveSize)+1;
          for (let index = 0; index < countOfArchive; index++) {
            const link = `${archiveRoot}/${index}`;
            links.push(link);
          }
          return {classify:undefined,group:undefined,archives:archivePosts,pagenationURLs:links}
        }
      )
    )
  }
}
