import { Component, OnInit } from '@angular/core';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.scss']
})
export class AppPhoneComponent implements OnInit {

  constructor(private appService: AppsService) { }

  recentNumber!: number;

  ngOnInit(): void {
    this.recentNumber = this.appService.getNotificationNumber('Téléphone')
  }
}
