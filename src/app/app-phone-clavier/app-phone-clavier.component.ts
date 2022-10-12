import { Component, OnInit } from '@angular/core';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-clavier',
  templateUrl: './app-phone-clavier.component.html',
  styleUrls: ['./app-phone-clavier.component.scss']
})
export class AppPhoneClavierComponent implements OnInit {

  constructor(private appService: AppsService) { }

  callNumber!: string;
  contactName!: string;

  ngOnInit(): void {
    this.callNumber = '0645784512';
    this.contactName = 'Alex Deckel';
  }

  searchContact() {
    this.contactName = '';
    const search = this.appService.searchContactByNumber(this.callNumber);
    if (search) {
      if (search.firstName !== '' && search.lastName !== '') {
        this.contactName = search.firstName + ' ' + search.lastName;
      } else {
        this.contactName = search.firstName + search.lastName;
      }
    }
  }

  onClickNumber(number_: string) {
    this.callNumber = this.callNumber + number_;
    this.searchContact();
  }

  onCall() {
    console.log('Call number #', this.callNumber)
  }

  onReturn() {
    this.callNumber = this.callNumber.slice(0, -1);
    this.searchContact();
  }
}
