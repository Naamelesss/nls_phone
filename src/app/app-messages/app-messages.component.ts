import { Component, OnInit } from '@angular/core';
import { MessagesArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {

  constructor(private appService: AppsService) { }

  messagesArray!: MessagesArray[];

  ngOnInit(): void {
    this.messagesArray = this.appService.getRecentConversation();
    this.messagesArray = this.messagesArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

}
