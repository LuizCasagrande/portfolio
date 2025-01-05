import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title,
              private metaService: Meta) {
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMeta(description: string, keywords: string) {
    this.metaService.updateTag({name: 'description', content: description});
    this.metaService.updateTag({name: 'keywords', content: keywords});
  }

  updateOpenGraph(title: string, description: string) {
    this.metaService.updateTag({property: 'og:title', content: title});
    this.metaService.updateTag({property: 'og:description', content: description});
  }
}
