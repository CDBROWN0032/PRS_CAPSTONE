import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
  })
export class UserEditComponent implements OnInit {

  pagetitle = 'User Change';
  user: User;

  constructor(
    private UserSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  change(): void {
    this.UserSvc.Change(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/users/list');
    });
  }

 getUserById(id) {
    this.UserSvc.Get(id).subscribe(user => {
      this.user = user;
      console.log('User: ', user);
    });
  }

  ngOnInit() {
  this.route.params.subscribe(parms => {
    const id = parms['id']; // changed from let to const
    this.getUserById(id);
  });
}
}


