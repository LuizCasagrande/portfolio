import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {MyPreset} from './primeng.preset';
import {environment} from '../environments/environment';
import {InMemoryCache} from '@apollo/client/core';
import {provideApollo} from 'apollo-angular';
import {provideHttpClient} from '@angular/common/http';

const apolloOptions = () => ({
  cache: new InMemoryCache(),
  uri: 'https://api.github.com/graphql',
  headers: {Authorization: `Bearer ${environment.githubToken}`},
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({theme: {preset: MyPreset}}),
    provideHttpClient(),
    provideApollo(apolloOptions),
  ],
};
