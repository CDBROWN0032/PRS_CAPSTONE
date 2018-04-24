import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from './menu-item.component';
import { Menu } from './menu';
import { SystemService } from '../../services/system.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menuItems: Menu[] = [
  new Menu ('Home', '/home', 'The Home Page'),
  new Menu ('About', '/about', 'The About Page'),
  new Menu ('Users', '/users/list', 'The user list display'),
  new Menu ('Vendors', '/vendors/list', 'The vendor list display'),
  new Menu ('Products', '/products/list', 'The Products Page'),
  new Menu ('PurhcaseRequests', '/purchaserequests/list', 'The Purchase Requests'),
  new Menu ('Review', '/purchaserequests/reviewlist', 'Review List')
];

  constructor(
    private sys: SystemService,

  ) { }
  user: User;
  logout(): void {
    this.sys.loggedInUser.next(null);
    console.log('Logged in user cleared:', this.sys.loggedInUser);
  }

  ngOnInit() {
  }

}
