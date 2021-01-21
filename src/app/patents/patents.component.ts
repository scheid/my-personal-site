import { Component, OnInit } from '@angular/core';
import { PatentsService } from '../services/patents.service';
import * as moment from 'moment';
import {PatentStatusPipe} from '../pipes/patent-status.pipe';


@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.scss'],
  providers: [PatentStatusPipe]
})
export class PatentsComponent implements OnInit {

  patentItems: any[];

  grantedCount: number;
  pendingCount: number;

  constructor(private patentsService: PatentsService, private patentStatusPipe: PatentStatusPipe) {
  }

  ngOnInit() {

      const me = this;



      this.patentsService.getPatents().subscribe(
          (data) => {
              me.patentItems = data;

              me.grantedCount = this.patentStatusPipe.transform(data, 'granted').length;
              me.pendingCount = this.patentStatusPipe.transform(data, 'patent-pending').length;
          },
          (err) => { console.log('have err in patentsService', err); }

      );

  }


  formatDate(obj) {
    return moment(obj).format('LL');
  }

}
