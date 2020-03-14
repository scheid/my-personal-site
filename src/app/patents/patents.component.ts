import { Component, OnInit } from '@angular/core';
import { PatentsService } from '../services/patents.service';
import * as moment from 'moment';


@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.scss']
})
export class PatentsComponent implements OnInit {

  patentItems: any[];

  constructor(private patentsService: PatentsService) {
  }

  ngOnInit() {

      const me = this;



      this.patentsService.getPatents().subscribe(
          (data) => {
              me.patentItems = data;
          },
          (err) => { console.log('have err in patentsService', err); }

      );

  }


  formatDate(obj) {
    return moment(obj).format('LL');
  }

}
