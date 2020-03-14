import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import * as d3 from 'd3';
import { LogActionService } from './services/log-action.service';
import { ActivatedRoute } from '@angular/router';
// import {Log} from "@angular/core/testing/src/logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LogActionService]
})
export class AppComponent implements OnInit {

  cfg: any;

  @ViewChild('flyoutPanelMenu') flyoutPanelMenu: any;

  constructor(private router: Router, private route: Router, private logService: LogActionService) {


  }


  showFlyOutMenu() {
    console.log('showFlyOutMenu');
    this.flyoutPanelMenu.show();
    // NOTE: you would hide the fly out by calling this.flyOutPanel1.hide();
  }


  ngOnInit() {

    const me = this;

    this.cfg = {

      containerSelector: 'body',
      /*palette: ['#343434', '#EBE04F', '#FD6E30', '#6FCFC7'], */
      palette: ['#b1eb00', '#ff3fd4', '#ffac00', '#53bbf4', '#ff432e'],
      labels: ['Home', 'Designs', 'Philosophy', 'Experience'],
      views: ['home', 'designs', 'philosophy', 'experience/employment'],
        menu: [
            {label: 'Home',
            view: 'home'
            },
            {label: 'Designs',
                view: 'designs'
            },
            {label: 'Philosophy',
                view: 'philosophy'
            },
            {label: 'Experience',
                view: 'experience',
                children: [
                    {view: 'employment', label: 'Employment'},
                    {view: 'education', label: 'Education'},
                    {view: 'patents', label: 'Patents'},
                    {view: 'presentations', label: 'Presentations'}
                ]
            }
        ],
      buttonWidth: 125,
      buttonHeight: 25,
      h: 150,
      svg: null,
      btnG: null,
      onLinkClick: function(){}
    };



    this.render();

    this.route.events.subscribe(evt => {

      if ( evt instanceof NavigationEnd ) {


        this.logService.saveAction('route', evt.urlAfterRedirects).subscribe(
          (data) => {

          },
          (err) => { console.log('have error in saveAction', err); }
        );

        let i = 0;

        for (i = 0; i < me.cfg.views.length; i++) {

            const viewBase = me.cfg.views[i].split('/')[0];

            // match the path of the route and use that to set active item in nav
          if (evt.urlAfterRedirects.substring(1, viewBase.length + 1) === viewBase) {
            me.setSelected(viewBase);
          }
        }
      }
    });
  }


  // i will be the view name, which is the route
  setSelected(i) {


    let me = this;

    me.cfg.svg.selectAll(".selected")
        .classed("selected", false)
        .transition()
        .duration(500)
        .attr("height", me.cfg.buttonHeight);

    me.cfg.svg.select("#nav-btn-" + i)
        .classed("selected", true)
        .transition()
        .duration(500)
        .attr("height", me.cfg.h);

  };



  render() {

    let me = this;
    let leftPos = 400;
    let btnSpacing = 20;
    let w = me.cfg.labels.length * (me.cfg.buttonWidth + btnSpacing) + leftPos;
    let h = me.cfg.h;


    me.cfg.svg = d3.select("#header")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    me.cfg.btnG = me.cfg.svg.selectAll(".nav-btn")
        .data(me.cfg.labels)
        .enter()
        .append("g")
        .classed("nav-btn", true)
        .attr("transform", function(d, i) {
          //d.xPos = (i * (me.cfg.buttonWidth + btnSpacing) + leftPos);
          return "translate(" + (i * (me.cfg.buttonWidth + btnSpacing) + leftPos) + ",0)";
        });


    let linkClick = function(d, i, scope) {

       // console.log("scope");
       // console.log(scope);

        d3.selectAll(".selected")
            .classed("selected", false)
            .transition()
            .duration(500)
            .attr("height", me.cfg.buttonHeight);

        scope
            .classed("selected", true)
            .transition()
            .duration(500)
            .attr("height", h);

        me.router.navigate([me.cfg.views[i]]);


        // fire user defined fn, if defined
        me.cfg.onLinkClick();


    };


    let btns = me.cfg.btnG
        .append("rect")
        .classed("nav-btn-rect", true)
        .attr("id", function(d, i) { return 'nav-btn-' + me.cfg.views[i].split('/')[0]; })
        .attr("width", me.cfg.buttonWidth)
        .attr("height", me.cfg.buttonHeight)
        .attr("x",0)
        .attr("y", 0)
        .style("fill", function(d, i) { return me.cfg.palette[i]; })
     //   .attr("routerLink", function(d, i) { return me.cfg.views[i];  } )
        .on("click", function(d, i) { linkClick(d, i, d3.select(this.parentNode).select("rect")) });


    let labels = me.cfg.btnG
        .append("text")
        .attr("x", me.cfg.buttonWidth / 2)
        .attr("y", me.cfg.buttonHeight + 15)
        .classed("nav-btn-text", true)

        .text(function(d, i) { return d;})
        .on("click", function(d, i) { linkClick(d, i, d3.select(this.parentNode).select("rect")) });

  };



}



