import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {SeoService} from './core/seo/seo.service';
import {ShowcaseComponent} from './showcase/showcase.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ShowcaseComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private primeNgConfig: PrimeNG,
              private seoService: SeoService) {
    this.primeNgConfig.ripple.set(true);

    const name = 'Luiz Casagrande';
    const description = 'A Software Engineer from Brazil with a passion for innovative solutions.';
    const metaTags = [
      name,
      'Portfolio',
      'Software Engineer',
      'Software Developer',
      'Developer',
      'Dev',
    ];

    this.seoService.updateTitle(name);
    this.seoService.updateMeta(description, metaTags.join(', '));
    this.seoService.updateOpenGraph(name, description, 'https://luizcasagrande.dev/assets/images/profile.jpg');
  }
}
