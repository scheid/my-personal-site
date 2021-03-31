import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  patentItems: any;

  activeSection: any;

  @ViewChild('navBar') navBar: any;

  navItems: any[];

  navOpacity: number;

  @ViewChild('tabset') tabset: any;

  constructor( private activeRoute: ActivatedRoute, private route: Router) {

      let me = this;
      this.navOpacity = 0;

      this.navItems =  [
          {path: 'employment', label: 'Employment'},
          {path: 'education', label: 'Education'},
          {path: 'patents', label: 'Patents'} /*,
          {path: 'presentations', label: 'Presentations'}*/
      ];

      this.route.events.subscribe(evt => {

      if ( evt instanceof NavigationEnd ) {
          // console.log('route changed', evt);
          let i = 0;

          for (i = 0; i < me.navItems.length; i++) {

            const viewBase = me.navItems[i].path;

           // console.log(evt.urlAfterRedirects.split('/'));

            // match the path of the route and use that to set active item in nav
            if (evt.urlAfterRedirects.split('/')[2] === viewBase) {
              me.setItemActive(me.navItems[i]);
            }
          }
      }
    });

      this.activeRoute.paramMap
          .subscribe(params => {

              // this.activeSection = params.get('section');

          });
  }

  ngOnInit() {

      const me = this;

      setTimeout(function() { me.navOpacity = 1; }, 550);

  }


  setItemActive(item) {

    let i = 0;

    for (i = 0; i < this.navItems.length; i++) {
      this.navItems[i].active = false;
    }

    item.active = true;

  }

}
