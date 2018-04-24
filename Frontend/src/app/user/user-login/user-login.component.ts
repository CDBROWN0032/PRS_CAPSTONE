import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SystemService } from '../../services/system.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '', '', false, false, false);
  message = '';

  constructor(
    private UserSvc: UserService,
    private SysSvc: SystemService,
    private router: Router,
    private AuthSvc: AuthService

  ) { }

  login(): void {
    this.SysSvc.setNotLogin();
    this.UserSvc.login(this.user.Username, this.user.Password)
    .subscribe(res => {
      if (res.Result.toUpperCase() === 'SUCCESS') {
        this.user = res.Data;
        this.SysSvc.setLoggedInUser(this.user);
        console.log('Login Successful:', res.Message);
        this.router.navigateByUrl('/home');
        this.AuthSvc.setUserLoggedIn(true);
      } else {
        this.SysSvc.setLoggedInUser(null);
        console.error('Login Failure:', res.Message);
        this.message = res.Message;
        this.AuthSvc.setUserLoggedIn(false);
      }
    });
}

  ngOnInit() {
    this.SysSvc.setIsLogin();
  }

  // ngOnDestroy() {
  // }
}
