import { Component, Input, OnInit } from '@angular/core';
import { MessagesArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent implements OnInit {
  @Input() message!: MessagesArray;
  labelName!: string;

  constructor(private appService: AppsService) { }

  ngOnInit(): void {
    const search = this.appService.searchContactByNumber(this.message.number) // a mettre dans service
    if (search) {
      this.labelName = search.firstName + " " + search.lastName;
    } else {
      this.labelName = this.message.number;
    }
  }

}
