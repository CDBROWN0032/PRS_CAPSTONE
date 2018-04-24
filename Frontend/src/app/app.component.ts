import { Component, OnInit } from '@angular/core';
import { SystemService } from './services/system.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin;

  get login() {return 'Login is ' + this.isLogin;
  }

  constructor (private SysSvc: SystemService) {
  }

  ngOnInit() {
    this.SysSvc.isLogin.subscribe(b => this.isLogin = b);
  }
}
