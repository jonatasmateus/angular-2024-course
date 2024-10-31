import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

function loggingInterceptor( // interceptor function is the modern way to intercept HTTP requests in Angular, instead class approach.
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  console.log('[Outgoing Request]');
  console.log(request);
  return next(request);
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
