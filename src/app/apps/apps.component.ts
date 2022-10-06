import { Component, Input } from '@angular/core';
import { AppsArray } from '../models/apps.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  @Input() apps!: AppsArray;

  constructor(private router: Router) {}

  onClickApp() {
    this.router.navigateByUrl(this.apps.route)
  }
}
