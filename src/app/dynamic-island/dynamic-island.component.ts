import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss']
})
export class DynamicIslandComponent implements OnInit {

  notifcall!: boolean;

  // number!: number;
  // text1!: string;
  // text2!: string;

  // constructor() { }

  ngOnInit(): void {
    this.notifcall = false;

    // setTimeout(() => this.notifcall = true, 2000);
  }

  dynamicNotif(notifType: 'call' | 'message' | 'notif', number: string): void {
    this.notifcall = !this.notifcall;

    // if (notifType === 'call') {
      
    // }
  }
}
