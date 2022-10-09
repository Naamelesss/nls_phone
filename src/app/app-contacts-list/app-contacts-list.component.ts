import { Component, Input } from '@angular/core';
import { ContactsArray } from '../models/apps.model';

@Component({
  selector: 'app-app-contacts-list',
  templateUrl: './app-contacts-list.component.html',
  styleUrls: ['./app-contacts-list.component.scss']
})
export class AppContactsListComponent {
  @Input() appContactList!: ContactsArray;
}
