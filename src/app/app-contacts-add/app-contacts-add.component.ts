import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-contacts-add',
  templateUrl: './app-contacts-add.component.html',
  styleUrls: ['./app-contacts-add.component.scss']
})
export class AppContactsAddComponent implements OnInit {

  constructor(private appService: AppsService, private router: Router) { }

  firstName!: string;
  lastName!: string;
  number!: string;
  note!: string;

  firstLetterName!: string;
  secLetterName!: string;

  contactExist!: boolean;

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
    this.number = '';
    this.note = '';

    this.firstLetterName = "";
    this.secLetterName = "";

    this.contactExist = false;
  }

  onChangeName(name: string, type: string): void {
  if (type === 'main') {
      this.firstName = name;
      this.firstLetterName = name.charAt(0);
  } else if (type === 'sub') {
      this.lastName = name;
      this.secLetterName = name.charAt(0);
    }
  }
  onChangeNumber(number: string):void {
    this.number = number;
    // this.contactExist = false;
  }
  onChangeNote(text: string):void {
    this.note = text;
  }
  onValidateNewContact():void {
    // alert("Name : "+ this.firstName + " | LastName : " + this.lastName + " | Number : " + this.number + " | Note : " + this.note)
    if ((this.firstName !== '' || this.lastName !== '') && this.number !== '') {
      const search = this.appService.searchContactByNumber(this.number)
      if (!search) {
        this.appService.addNewContact(this.firstName, this.lastName, this.number, this.note);
        this.router.navigateByUrl('contacts')
      } else {
        this.contactExist = true;
      }
    }
  }
}
