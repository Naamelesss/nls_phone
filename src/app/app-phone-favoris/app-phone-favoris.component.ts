import { Component, OnInit } from '@angular/core';
import { ContactsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-favoris',
  templateUrl: './app-phone-favoris.component.html',
  styleUrls: ['./app-phone-favoris.component.scss']
})
export class AppPhoneFavorisComponent implements OnInit {

  constructor(private appService: AppsService) {}

  favsArray!: ContactsArray[];

  ngOnInit(): void {
    this.favsArray = this.appService.getAllFavs();
    // for (let i = 0; i < 10; i++) {
    //   console.log(this.favsArray[i].favoris)
    // }
  }
}
