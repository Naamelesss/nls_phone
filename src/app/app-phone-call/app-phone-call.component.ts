import { Component, OnInit } from '@angular/core';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-call',
  templateUrl: './app-phone-call.component.html',
  styleUrls: ['./app-phone-call.component.scss']
})
export class AppPhoneCallComponent implements OnInit {

  constructor(private appService: AppsService) { }

  numberLabel!: string;
  callTime!: string;

  ngOnInit(): void {
    const receiveData = window.history.state.customData;

    const contact = this.appService.searchContactByNumber(receiveData)
    if (contact) {
      this.numberLabel = contact.firstName + ' ' + contact.lastName;
    } else {
      this.numberLabel = receiveData;
    }

    this.callTime = 'appel...'
  }
}
