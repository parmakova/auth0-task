import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  // Define the routes we are going to interact with
  private publicUserUrl = 'http://localhost:3001/api/public';
  private adminUserUrl = 'http://localhost:3001/api/admin';

  constructor(private http: Http) { }

  // Implement a method to get the public deals
  getPublicUsers() {
    return this.http
      .get(this.publicUserUrl)
      .toPromise()
      .then(response=>response.json() as User[])
      .catch(this.handleError);
  }

  // Implement a method to get the private deals
  getAdminUsers() {
    return this.http
      .get(this.adminUserUrl)
      .toPromise()
      .then(response=>response.json() as User[])
      .catch(this.handleError);
  }

  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}