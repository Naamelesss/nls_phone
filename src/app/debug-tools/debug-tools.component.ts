import { Component, OnInit } from '@angular/core';
import { IncomeNotif } from '../models/apps.model';
import { AppsService } from '../services/apps.service';
// import { interval, Observable } from 'rxjs';
// import { DynamicIslandComponent } from '../dynamic-island/dynamic-island.component';
// import { receiveNotif$ } from '../global-variables';
// import {SharedService} from 'src/shared.service';

@Component({
  selector: 'app-debug-tools',
  templateUrl: './debug-tools.component.html',
  styleUrls: ['./debug-tools.component.scss']
})
export class DebugToolsComponent implements OnInit {

  // constructor(
  //   private dynamicIsland : DynamicIslandComponent
  //   ) {}
  // test!: boolean;

  // constructor (sharedService: SharedService)

  // constructor(private dynamicIsland: DynamicIslandComponent) {}
  constructor(private appService: AppsService) {}
  notif!: boolean;
  // number!: string;
  // text!: string;
  // imgUrl!: string;

  incomeNotif!: IncomeNotif;

  // receiveNotif$!: Observable<number>;

  ngOnInit() {
    this.notif = false;
    this.incomeNotif = {
      number: "",
      text: "",
      imgUrl: "",
    }

    // this.dynamicIsland.notifcall = true

    // this.test = new DynamicIslandComponent().notifcall;
    
    // this.receiveNotif$ = interval(1000);

    // this.receiveNotif$.subscribe(value => console.log(value));

    // receiveNotif$ = interval(1000);

    // public receiveNotif$: Observable<number>;
  }

  onCall() {
    this.incomeNotif.number = (<HTMLInputElement>document.getElementById("number")).value;

    // console.log('Call #', this.number);




    // new DynamicIslandComponent().dynamicNotif('call', this.number);
    // new DynamicIslandComponent().notifcall = true;
    // this.test = true
    // this.dynamicIsland.dynamicNotif('call', this.number);
    // this.dynamicIsland.notifcall = true;

    // this.notif = true;

    this.appService.sendDynamicNotification('appel', this.incomeNotif.number, '', '')
  }

  onMsg() {
    this.incomeNotif.number = (<HTMLInputElement>document.getElementById("number2")).value;
    this.incomeNotif.text = (<HTMLInputElement>document.getElementById("text2")).value;
    // console.log('Msg #', this.incomeNotif.number, 'Text #', this.incomeNotif.text);

    this.appService.sendDynamicNotification('message', this.incomeNotif.number, this.incomeNotif.text, '')
  }

  onNotif() {
    // this.number = (<HTMLInputElement>document.getElementById("number")).value;
    // this.text = (<HTMLInputElement>document.getElementById("text")).value;
    // this.imgUrl = (<HTMLInputElement>document.getElementById("imgUrl")).value;
    // console.log('Name #', this.number, 'Text #', this.text, 'img #', this.imgUrl);
  }

  onFinish() {
    this.notif = false;
    this.appService.finishCall(this.incomeNotif.number, false, 'call', true)
  }
}
