import { Component, OnInit } from '@angular/core';
import { AppsArray } from './models/apps.model';
import { AppsService } from './services/apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nls_phone';

  time!: Date;

  appsArray!: AppsArray[]
  constructor(private appsArrayService: AppsService) {}

  ngOnInit() {
    this.time = new Date();

    this.appsArray = this.appsArrayService.appsArray;
  }
}
