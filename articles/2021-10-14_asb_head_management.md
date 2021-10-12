---
title: 'Head内の title / meta 要素書き換えを実装'
description: Head内のtitleやmetaタグなどを設定するサービスクラスを作成しました。
author: ぽんじゅ
published:  true
date: '2021-10-13T21:00'
series: blog_building_notes
category:
    - angular
    - scully
thumbnail: /upload/images/scully_archive-01/02.png
slug: demoblog_updated_2021_1011
---

## 今日のご報告

一昨日までこのサイトの記事はタイトル表示が設定されていませんでした。
ブログ、デモ、双方とも実装したよ。というご報告。


## サービスクラス／エンティティのインターフェース定義

### head-setup.service.ts
```ts
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { DEFAULT_THUMBNAILS_URL, SITE_NAME, SITE_NAME_JP } from '../settings/site-profile';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  setupHeadElement(context:HeadSetupContext){}

  constructor(private _title:Title,private _meta:Meta) { }
}

export interface HeadSetupContext{
  title:string;
  description:string;
  url:string;
  pageType:string;
  thumbnailURL?:string|undefined
}

```
