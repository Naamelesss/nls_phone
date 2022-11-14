import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppsService } from '../services/apps.service';
// import { Observable, interval, tap } from 'rxjs';
// import { DebugToolsComponent } from '../debug-tools/debug-tools.component';
// import { Injectable } from "@angular/core";

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss']
})
// @Injectable({
  // providedIn: 'root'
// })

export class DynamicIslandComponent implements OnInit, OnDestroy {

  // notifcall!: boolean;
  displayDynamic!: boolean;
  dynamicType!: string;
  number!: string;
  labelText!: string;
  msgText!: string;
  // text1!: string;
  // text2!: string;

  // constructor(private tesTs: DebugToolsComponent) { }

  // receiveNotif$!: Observable<number>;

  subscriptionType!: Subscription;
  subscriptionNumber!: Subscription;
  subscriptionString!: Subscription;
  subscriptionImgUrl!: Subscription;
  constructor(private appService: AppsService, private router: Router) {
    this.subscriptionType = appService.dynamicNotification$.subscribe(type => {
      // alert(notif)
      if (type === 'appel') {
        this.onCallEntry();
      } else if (type === 'message') {
        this.onNewMessage();
      }
    });
    this.subscriptionNumber = appService.dynamicNotificationNum$.subscribe(number => {
      this.number = number
    })
    this.subscriptionString = appService.dynamicNotificationStr$.subscribe(text => {
      this.msgText = text
    })
    // this.subscriptionImgUrl
  }

  ngOnInit() {
    this.displayDynamic = false;
    this.dynamicType = ''
    this.number = '';
    this.msgText = '';
    // this.notifcall = false;
    // setTimeout(() => this.notifcall = true, 2000);

    // this.receiveNotif$.subscribe(value => console.log(value));
    // const test = new DebugToolsComponent();
    // test.receiveNotif$.subscribe(value => console.log(value));

    // this.receiveNotif$ = interval(500).pipe(
    //   tap(() => this.refreshNotif())
    // )

    // this.receiveNotif$.subscribe();

    // this.notifcall = false;
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionType.unsubscribe();
    this.subscriptionNumber.unsubscribe();
    this.subscriptionString.unsubscribe();
    this.subscriptionImgUrl.unsubscribe();
  }

  searchContact(): void {
    const search = this.appService.searchContactByNumber(this.number)
    if (search) {
      this.labelText = search.firstName + " " + search.lastName;
    } else {
      this.labelText = this.number;
    }
  }
  onCallEntry(): void {
    this.searchContact()
    this.displayDynamic = true;
    this.dynamicType = 'call';
  }
  onNewMessage(): void {
    this.searchContact()
    this.displayDynamic = true;
    this.dynamicType = 'message';
  }


  

  closeDynamic() {
    this.displayDynamic = false;
  }
  onAcceptCall() {
    if (this.number !== '') {
      this.closeDynamic()
      const navigationExtas: NavigationExtras = {
        state: {
          customData: this.number,
        }
      };
      this.router.navigate(['/phone/clavier/call'], navigationExtas)
    }
  }
  onCloseNotif(isCall: boolean) {
    if (isCall) {
      this.appService.finishCall(this.number, false, 'call', false)
    }
    this.closeDynamic();
  }

  // dynamicNotif(notifType: 'call' | 'message' | 'notif', number: string): void {
    // this.notifcall = true;

    // if (notifType === 'call') {
      
    // }
    // alert('test')
    // this.receiveNotif$;
  //   lightObservable$.pipe(
  //     mergeMap(color => getTrainObservable$(color))
  // ).subscribe();

    // console.log(this.notifcall)
    // this.notifcall = true;
    // alert(notifType + ' ' + number + ' ' + this.notifcall)
    // setTimeout(() => this.notifcall = true, 2000);
  // }

  // refreshNotif() {
    // const test = this.notifcall
    // this.notifcall = !this.notifcall;
    // this.notifcall = true;
    // alert("")
    // console.log(this.notifcall)
  // }
}