import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-call',
  templateUrl: './app-phone-call.component.html',
  styleUrls: ['./app-phone-call.component.scss']
})
export class AppPhoneCallComponent implements OnInit {

  constructor(private appService: AppsService, private router: Router, private route: ActivatedRoute) { }

  numberLabel!: string;
  callTime!: string;
  receiveData!: any;

  ngOnInit(): void {
    this.receiveData = window.history.state;

    const contact = this.appService.searchContactByNumber(this.receiveData.customData)
    if (contact) {
      this.numberLabel = contact.firstName + ' ' + contact.lastName;
    } else {
      this.numberLabel = this.receiveData.customData;
    }

    this.callTime = 'appel...'
  }

  onDismiss() {
    this.appService.finishCall(this.receiveData.customData, this.receiveData.source, 'call', false)
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
