import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'admin-page',
  templateUrl: 'admin-page.component.html',
  styleUrls: ['admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  adminUsers : User[];
  error: any;

  constructor(
    private userService: UserService) { }

  getAdminUsers(): void {
    this.userService
      .getAdminUsers()
      .then(users => this.adminUsers = users)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getAdminUsers();
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}