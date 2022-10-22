import { Component, OnInit } from '@angular/core';
import { RecentCallsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-recent',
  templateUrl: './app-phone-recent.component.html',
  styleUrls: ['./app-phone-recent.component.scss']
})
export class AppPhoneRecentComponent implements OnInit {

  constructor(private appService: AppsService) {}

  callList!: RecentCallsArray[];

  ngOnInit(): void {
    this.callList = this.appService.getRecentCalls();

    for (let i = 0; i < this.callList.length; i++) {
      const search = this.appService.searchContactByNumber(this.callList[i].number);
      if (search) {
        this.callList[i].label = search.firstName + ' ' + search.lastName;
      } else {
        this.callList[i].label = this.callList[i].number;
      }
    }
  }
}
