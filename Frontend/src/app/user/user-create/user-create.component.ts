import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pagetitle = 'User Create';
  user: User = new User(0, '' , '' , '' , '' , '' , '' , false , false , false);

  constructor(
    private UserSvc: UserService,
    private router: Router
  ) { }

  create(): void {
    this.UserSvc.Create(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/users/list');
    });
  }

  ngOnInit() {
  }
}
