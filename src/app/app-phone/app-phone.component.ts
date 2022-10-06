import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.scss']
})
export class AppPhoneComponent implements OnInit {

  constructor() { }

  callNumber!: number;

  ngOnInit(): void {
    this.callNumber = 4.23;
  }

  onClickNumber(number_: number) {
    this.callNumber = number_;
  }

  onCall() {
    console.log('Call number #', this.callNumber)
  }
}
