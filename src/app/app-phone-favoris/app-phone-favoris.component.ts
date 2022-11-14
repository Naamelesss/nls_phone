import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactsArray } from '../models/apps.model';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone-favoris',
  templateUrl: './app-phone-favoris.component.html',
  styleUrls: ['./app-phone-favoris.component.scss']
})
export class AppPhoneFavorisComponent implements OnInit {

  constructor(private appService: AppsService,
              private router: Router) {}

  favsArray!: ContactsArray[];

  ngOnInit(): void {
    this.favsArray = this.appService.getAllFavs();
    // for (let i = 0; i < 10; i++) {
    //   console.log(this.favsArray[i].favoris)
    // }
  }

  onCall(number: string) {
    const navigationExtas: NavigationExtras = {
      state: {
        customData: number,
        source: true,
      }
    };
    this.router.navigate(['/phone/favoris/call'], navigationExtas)
  }
}
