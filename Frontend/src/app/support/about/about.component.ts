import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
