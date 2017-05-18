import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'front-page',
  templateUrl: 'front-page.component.html',
  styleUrls: ['front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  publicUsers: User[];

  constructor(
    private userService: UserService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userService.getPublicUsers()
      .then(users => this.publicUsers = users);
  }
  
  purchase(item){
    alert("You bought the: " + item.name);
  }
}