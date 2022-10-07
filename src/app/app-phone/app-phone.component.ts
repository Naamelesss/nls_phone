import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.scss']
})
export class AppPhoneComponent implements OnInit {

  constructor() { }

  callNumber!: string;

  ngOnInit(): void {
    this.callNumber = '06457845126';
  }

  onClickNumber(number_: string) {
    this.callNumber = this.callNumber + number_;
  }

  onCall() {
    console.log('Call number #', this.callNumber)
  }

  onReturn() {
    this.callNumber = this.callNumber.slice(0, -1);
  }
}
