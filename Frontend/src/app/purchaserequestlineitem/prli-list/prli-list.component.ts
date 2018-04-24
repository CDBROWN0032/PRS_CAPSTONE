import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrliService } from '../../services/prli.service';
import { PRLI } from '../../models/prli';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PrliListComponent implements OnInit {

  pagetitle = 'PRLI List';
  prlis: PRLI[];


  constructor(
    private PrliSvc: PrliService
  ) { }

  ngOnInit() {
    this.PrliSvc.List()
      .subscribe(prlis => {
        console.log(prlis);
        this.prlis = prlis;
      });
  }
}
