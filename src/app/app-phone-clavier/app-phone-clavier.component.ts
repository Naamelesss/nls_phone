import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-clavier',
  templateUrl: './app-phone-clavier.component.html',
  styleUrls: ['./app-phone-clavier.component.scss']
})
export class AppPhoneClavierComponent implements OnInit {

  constructor(private appService: AppsService,
              private router: Router) { }

  callNumber!: string;
  contactName!: string;
  addNumberButton!: boolean;

  ngOnInit(): void {
    this.callNumber = '';
    this.contactName = '';
    this.addNumberButton = false;
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
    this.addNumberButton = false;
    this.callNumber = this.callNumber + number_;
    this.searchContact();
  }

  onCall() {
    if (this.callNumber !== '') {
      const navigationExtas: NavigationExtras = {
        state: {
          customData: this.callNumber,
          source: true,
        }
      };
      this.router.navigate(['/phone/clavier/call'], navigationExtas)
    }
  }

  onReturn() {
    this.addNumberButton = false;
    this.callNumber = this.callNumber.slice(0, -1);
    this.searchContact();
  }
  
  onAddNumber() {
    this.addNumberButton = true;
  }

  onNewNumber() {
    const navigationExtas: NavigationExtras = {
      state: {
        customData: this.callNumber,
      }
    };
    this.router.navigate(['phone/contacts/add'], navigationExtas)
  }
}
