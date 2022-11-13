import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecentCallsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-recent',
  templateUrl: './app-phone-recent.component.html',
  styleUrls: ['./app-phone-recent.component.scss']
})
export class AppPhoneRecentComponent implements OnInit {

  constructor(private appService: AppsService,
              private router: Router) {}

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

  onHoverDiv(element: RecentCallsArray) {
    if (element.missed) {
      element.missed = false;
      this.appService.notificationNumber('remove', 'Téléphone', 1)
    }
  }

  onCall(number: string) {
    const navigationExtas: NavigationExtras = {
      state: {
        customData: number,
      }
    };
    this.router.navigate(['/phone/recent/call'], navigationExtas)
  }
}
