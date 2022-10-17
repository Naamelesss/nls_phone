import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsArray } from '../models/apps.model';

@Component({
  selector: 'app-app-contacts-list',
  templateUrl: './app-contacts-list.component.html',
  styleUrls: ['./app-contacts-list.component.scss']
})
export class AppContactsListComponent {
  @Input() appContactList!: ContactsArray;
  constructor(private router: Router) {};
  
  onEditContact() {
    this.router.navigateByUrl(`/contacts/edit/${this.appContactList.number}`)
  }
}
