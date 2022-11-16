import { Component, OnInit } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.scss']
})
export class AppPhoneComponent implements OnInit {

  constructor(private appService: AppsService) { }

  recentNumber!: number;
  interval$!: Observable<number>;

  ngOnInit(): void {
    // this.interval$.subscribe()
    this.recentNumber = this.appService.getNotificationNumber('Téléphone')
    // this.interval$ = interval(1000).pipe(
      // tap(() => this.recentNumber = this.appService.getNotificationNumber('Téléphone')),
      // tap(() =>  console.log(this.interval$))
    // );
    this.interval$ = interval(0); // a opti?
    this.interval$.subscribe(() => this.recentNumber = this.appService.getNotificationNumber('Téléphone'))
  }
}
