import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-phone-clavier',
  templateUrl: './app-phone-clavier.component.html',
  styleUrls: ['./app-phone-clavier.component.scss']
})
export class AppPhoneClavierComponent implements OnInit {

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
