
import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Input } from "@angular/core";

@Component({

  selector: 'fly-out-panel',
  templateUrl: 'fly-out-panel.component.html'
})
export class FlyOutPanelComponent  implements OnInit  {

    @Input() side: string = 'left'; //left or right
    @Input() displayType: string = 'cover'; //push or cover
    @Input() clickOffToClose: boolean;
    @Input() bgColor: string = '#ffffff';
    @ViewChild('windowCover') windowCover;
    @ViewChild('flyOutPanelContent') flyOutPanelContent;

    // TODO: include (optional) responsive functionality both here and in css so that menu can auto hide/show on browser width change.

    visible: boolean;
    panelWidth: number = 250;  /* not sure what to do with this variable yet; width ideally has to be baked into the css for the visual transitions to work well */


  constructor(private elementRef: ElementRef) {

      this.visible = false;
  }

  ngAfterViewInit() {
      this.hide();

  }

  ngOnInit() {

  }

  toggle() {

      if (this.visible) {
          this.hide();
      } else {
          this.show();
      }
  }


  _window(): any {
     // return the native window obj
     return window;
  }


   show() {

      this.visible = true;

      if (this.side == 'left') {
          this.flyOutPanelContent.nativeElement.className = 'fly-out-panel fly-out-left-show';
          if (this.displayType == 'push') { document.body.style.marginLeft =  '251px'; }
      }

      if (this.side == 'right') {
          this.flyOutPanelContent.nativeElement.className = 'fly-out-panel fly-out-right-show';
          if (this.displayType == 'push') { document.body.style.marginRight = '251px'; }
      }

      let me = this;

       // this large sizing of the wash/cover is a heavy handed way to ensure that the wash covers the whole screen
       // regardless of parent offset, as position:fixed is always reletive to
       // elements parent, not body
       me.windowCover.nativeElement.style.left = (-1 * window.innerWidth) + 'px';
       me.windowCover.nativeElement.style.width = (window.innerWidth * 3) + 'px';
       me.windowCover.nativeElement.style.top = (-1 * window.innerHeight) + 'px';
       me.windowCover.nativeElement.style.height = (window.innerHeight * 3) + 'px';

   }

   hide() {

      this.visible = false;

      if (this.side == 'left') {
          this.flyOutPanelContent.nativeElement.className = 'fly-out-panel fly-out-left-hide';
          if (this.displayType == 'push') { document.body.style.marginLeft =  '0px'; }
      }

      if (this.side == 'right') {
          this.flyOutPanelContent.nativeElement.className = 'fly-out-panel fly-out-right-hide';
          if (this.displayType == 'push') {document.body.style.marginRight =  '0px'; }
      }
  }


}
