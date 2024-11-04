import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.route';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(), // this ensure that components can extract path variables according to the declared name. E.g.: '/:userId' → `@Input() userId ...;`
      withRouterConfig({
        paramsInheritanceStrategy: 'always', // this ensure that children paths have access to parent path, like path variables. E.g.: '/:userId'
      })
    ),
  ],
};
