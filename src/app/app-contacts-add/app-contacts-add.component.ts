import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-contacts-add',
  templateUrl: './app-contacts-add.component.html',
  styleUrls: ['./app-contacts-add.component.scss']
})
export class AppContactsAddComponent implements OnInit {

  constructor() { }

  firstLetterName!: string;
  secLetterName!: string;

  ngOnInit(): void {
    this.firstLetterName = "";
    this.secLetterName = "";
  }

  onChangeName(name: string, type: string): void {
  if (type === 'main') {
      this.firstLetterName = name.charAt(0);}
    else if (type === 'sub') {
      this.secLetterName = name.charAt(0);}
  }
}
