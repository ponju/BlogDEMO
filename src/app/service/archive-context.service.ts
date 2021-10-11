import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';
import { ArchiveContext } from 'src/model/archivesContext';
import { Post, Postable } from 'src/model/post';

export const DEFAULT_ARCHIVE_SIZE = 8;
export const DEFAULT_ARCHIVE_ROOT = "/archives"
export const DEFAULT_ARTICLE_ROOT = "/article"

@Injectable({
  providedIn: 'root'
})
export class ArchiveContextService {
  constructor(private scully: ScullyRoutesService) { }

  getPlaneArchiveContext$(articleRoot = DEFAULT_ARTICLE_ROOT, archiveRoot = DEFAULT_ARCHIVE_ROOT, archiveSize = DEFAULT_ARCHIVE_SIZE): Observable<ArchiveContext> {
    return this.scully.available$.pipe(
      map((routeTable) => {
        let posts = routeTable.filter((route) => route.published)
          .filter(route => route.route.startsWith(articleRoot))
          .map(route => new Post(route))
          .sort((a, b) => Post.Compare(a, b))

        const countOfPosts = posts.length;
        const countOfArchives = Math.ceil(countOfPosts * 1.0 / archiveSize);
        const archivePages: string[] = [];

        for (let page = 0; page < countOfArchives; page++) {
          const element = `${archiveRoot}/${page}`
          archivePages.push(element);
        }
        return { classify: undefined, group: undefined, archives: posts, pagenationURLs: archivePages };
      }
      ))
  }
  getClassifiedArchiveContext$(classify: string, group: string, articleRoot = DEFAULT_ARTICLE_ROOT, archiveRoot = DEFAULT_ARCHIVE_ROOT, archiveSize = DEFAULT_ARCHIVE_SIZE): Observable<ArchiveContext> {
    return this.scully.available$.pipe(
      map((routeTable) => {
        let archives = routeTable.
          filter((route) => this.isClassifyTarget(route,articleRoot,classify,group))
          .map(route => { return new Post(route) })
          .sort((a, b) => Post.Compare(a, b))
        const countOfPosts = archives.length;
        const countOfArchives = Math.ceil(1.0 * countOfPosts / archiveSize);
        const archivePages: string[] = [];
        for (let page = 0; page < countOfArchives; page++) {
          const element = `${archiveRoot}/${classify}/${group}/${page}`
          archivePages.push(element);
        }
        return { classify: classify, group: group, archives: archives, pagenationURLs: archivePages };
      })
    )
  }
  isClassifyTarget(route:ScullyRoute,articleRoot:string,classify:string,group:string){
     let  hasClass = route.route.startsWith(articleRoot) && route[classify]!=undefined;
     if(!hasClass){
       return false;
     }
     if(route[classify] instanceof Array){
      return (route[classify] as string[]).some((g,i,a)=>g==group);
     }else if(typeof(route[classify])=="string"){
       return route[classify]==group;
     }

     return false;
  }
}