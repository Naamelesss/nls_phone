import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  ngOnInit() {
    this.time = new Date();
    this.devMode = true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
   }
}
