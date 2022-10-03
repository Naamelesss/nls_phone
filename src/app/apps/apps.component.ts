import { Component, Input } from '@angular/core';
import { AppsArray } from '../models/apps.model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  @Input() apps!: AppsArray;
}
