import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-contact-edit',
  templateUrl: './app-contact-edit.component.html',
  styleUrls: ['./app-contact-edit.component.scss']
})
export class AppContactEditComponent implements OnInit {

  contact!: ContactsArray;
  contactInitial!: string;

  constructor(private appService: AppsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contact = this.appService.searchContactByNumber(this.route.snapshot.params['number'])
    this.contactInitial = this.contact.firstName.charAt(0) + this.contact.lastName.charAt(0);
  }

  onFavs() {
    this.appService.changeContactFavs(this.contact.number);
  }
}
