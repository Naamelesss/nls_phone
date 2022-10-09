import { Component, OnInit } from '@angular/core';
import { ContactsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.scss']
})
export class AppContactsComponent implements OnInit {

  contactsArray!: ContactsArray[]
  constructor(private contactsArrayService: AppsService) { }

  ngOnInit(): void {
    this.contactsArray = this.contactsArrayService.contactsArray;
  }

}
