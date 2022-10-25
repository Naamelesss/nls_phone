import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-phone-call',
  templateUrl: './app-phone-call.component.html',
  styleUrls: ['./app-phone-call.component.scss']
})
export class AppPhoneCallComponent implements OnInit {

  constructor() { }

  numberLabel!: string;
  callTime!: string;

  ngOnInit(): void {
    this.numberLabel = 'Alex Deckel'
    this.callTime = 'appel...'
  }
}
