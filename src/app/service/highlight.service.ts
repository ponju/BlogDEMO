import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as Prism from 'prismjs';
import * as Loader from 'prismjs/components';

import 'clipboard';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

// ... probably more, check out node_modules/prismjs/components


@Injectable({ providedIn: 'root' })
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }
  
  init(){
    Prism.hooks.add("complete", (env) => {
      env.element.innerHTML = this.mod(env.element.innerHTML);
    });
  }
  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
  mod(rawHTML: string) {
    let rtn = ['<table class="script">'];
    let lines = rawHTML.trim().split("\n")
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      if (line.length > 0) {
        rtn.push(`<tr class="script_line"><td>${line}</td></tr>`);
      }
    }
    rtn.push('</table>')
    return rtn.join("\n");
  }
}
