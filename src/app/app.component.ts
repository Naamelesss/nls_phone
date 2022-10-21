import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { routeTransitionAnimation } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimation]
})
export class AppComponent implements OnInit {
  title = 'nls_phone';

  time!: Date;
  devMode!: boolean;
  // routerifo

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) 
  {
    router.events.subscribe(val => {
      this.activatedRoute.data.subscribe(data => {
        
      });
    })
    
    // console.log(this.location.getState());
  }

  ngOnInit() {
    this.time = new Date();
    this.devMode = true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
