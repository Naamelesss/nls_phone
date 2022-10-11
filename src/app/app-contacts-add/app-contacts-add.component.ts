import { Component, OnInit } from '@angular/core';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-contacts-add',
  templateUrl: './app-contacts-add.component.html',
  styleUrls: ['./app-contacts-add.component.scss']
})
export class AppContactsAddComponent implements OnInit {

  constructor(private appService: AppsService) { }

  firstName!: string;
  lastName!: string;
  number!: string;
  note!: string;

  firstLetterName!: string;
  secLetterName!: string;

  ngOnInit(): void {
    this.firstName = 'a';
    this.lastName = 'b';
    this.number = '5';
    this.note = 'c';

    this.firstLetterName = "";
    this.secLetterName = "";
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
  }
  onChangeNote(text: string):void {
    this.note = text;
  }
  onValidateNewContact():void {
    // alert("Name : "+ this.firstName + " | LastName : " + this.lastName + " | Number : " + this.number + " | Note : " + this.note)
    this.appService.addNewContact(this.firstName, this.lastName, this.number, this.note);
  }
}
