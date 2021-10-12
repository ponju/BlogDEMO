import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { DEFAULT_THUMBNAILS_URL, SITE_NAME, SITE_NAME_JP } from '../settings/site-profile';

@Injectable({
  providedIn: 'root'
})
export class HeadSetupService {
  setupHeadElement(context:HeadSetupContext){
    this._title.setTitle(context.title)

    let metas=[
      {name:"description",property:"description",content:context.description},
      {name:"og:url" ,property:"og:url",content:context.url},
      {name:"og:title",property:"og:title",content:context.title},
      {name:"og:site_name",property:"og:site_name",content:SITE_NAME_JP},
      {name:"og:locale",property:"og:locale",content:"ja_JP"},
      {name:"og:type",property:"og:type",content:context.pageType},
      {name:"og:description",property:"og:description",content:context.description},
      {name:"og:image",property:"og:image",content:context.thumbnailURL==undefined?DEFAULT_THUMBNAILS_URL:context.thumbnailURL},
      {name:"twitter:card",property:"twitter:card",content:"Summary Card"},
    ]
    metas.forEach(tag=>this._meta.updateTag(tag))
  }
  constructor(private _title:Title,private _meta:Meta) { }
}

export interface HeadSetupContext{
  title:string;
  description:string;
  url:string;
  pageType:string;
  thumbnailURL?:string|undefined
}