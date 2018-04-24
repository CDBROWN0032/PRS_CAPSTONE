import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRLI } from '../../models/prli';
import { PrliService } from '../../services/prli.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  pagetitle = 'PRLI Detail';
  prli: PRLI;

  constructor(
    private PRLIsvc: PrliService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.PRLIsvc.Remove(this.prli)
    .subscribe(res => {
      this.router.navigateByUrl('/purchaserequestlineitems/list');
    });
  }

  getPrliById(id) {
    this.PRLIsvc.Get(id)
    .subscribe(prli => {
      this.prli = prli;
      console.log('PRLI:', prli);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      const id = parms['id'];
      this.getPrliById(id);
    });
  }

}
