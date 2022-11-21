import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { ContactsArray, MessagesArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-message-conversation',
  templateUrl: './app-message-conversation.component.html',
  styleUrls: ['./app-message-conversation.component.scss']
})
export class AppMessageConversationComponent implements OnInit {

  constructor(private appService: AppsService, private route: ActivatedRoute) { }

  labelName!: string;
  contact!: ContactsArray;
  number!: string;
  conversation!: MessagesArray[];
  interval$!: Observable<number>

  ngOnInit(): void {
    this.number = this.route.snapshot.params['number'];
    this.contact = this.appService.searchContactByNumber(this.number);
    if (this.contact.firstName + this.contact.lastName) {
      this.labelName = this.contact.firstName + this.contact.lastName;
    } else {
      this.labelName = this.number;
    }
    // this.conversation = this.appService.getAllMessagesByNumber(this.number)
    // this.conversation = this.appService.messagesArray;

    this.appService.checkUpMessagesNotifications(this.number);

    this.interval$ = interval(0);
    this.interval$.subscribe(() => this.conversation = this.appService.getAllMessagesByNumber(this.number));
  }
  sendMessage(event: any) {
    const message = event.target.value;
    if (message) {
      this.appService.pushMessage(this.number, message);
    }
  }
}