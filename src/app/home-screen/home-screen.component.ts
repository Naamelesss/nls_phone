import { Component, OnInit } from '@angular/core';
import { AppsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  appsArray!: AppsArray[]
  constructor(private appsArrayService: AppsService) {}

  ngOnInit(): void {
    this.appsArray = this.appsArrayService.getApps();
  }
}
