import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'users-page',
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
        <div class="navbar-header">
         
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a routerLink="/public" routerLinkActive="active">Users</a>
          </li>
          <li>
            <a routerLink="/admin" *ngIf="authService.isAuthenticated()" routerLinkActive="active">Admin Users</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a *ngIf="!authService.isAuthenticated()" (click)="authService.login()">Log In</a>
          </li>
          <li>
            <a (click)=authService.logout() *ngIf="authService.isAuthenticated()">Log Out</a>
          </li>
        </ul>
    </nav>
    <div class="col-sm-12">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles : ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {
  title = 'Front page';

  constructor(private authService: AuthService) {
  }
}