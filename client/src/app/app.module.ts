import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule , Http, RequestOptions} from '@angular/http';
import {  provideAuth, AuthHttp, AuthConfig} from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }