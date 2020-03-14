import { Component, OnInit } from '@angular/core';

import { DesignsService } from "../services/designs.service";
import { ViewChild } from "@angular/core";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss'],
    providers: [NgbCarouselConfig]
})
export class DesignsComponent implements OnInit {

  designItems: any[];
  demoBase: '/demo/';

  currIdx: number;

  @ViewChild('slider') sliderCtrl;

  constructor(private designsService: DesignsService, private ngbConfig: NgbCarouselConfig) {

    const me = this;

    this.ngbConfig.showNavigationArrows = false;
    this.ngbConfig.showNavigationIndicators = false;

    this.currIdx = 1;

  }

  ngOnInit() {
    const me = this;

    this.designsService.getDesigns().subscribe(
        (data) => {
          me.designItems = data;
        },
        (err) => { console.log('have err', err); }

    );
  }


  next() {
      this.sliderCtrl.next();
      this.currIdx++;

      if (this.currIdx > this.designItems.length) { this.currIdx = 1;}

  }



    prev() {
        this.sliderCtrl.prev();
        this.currIdx--;

      if (this.currIdx < 1) { this.currIdx = this.designItems.length;}

    }

}
