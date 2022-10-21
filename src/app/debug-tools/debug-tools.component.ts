import { Component, OnInit } from '@angular/core';
import { DynamicIslandComponent } from '../dynamic-island/dynamic-island.component';

@Component({
  selector: 'app-debug-tools',
  templateUrl: './debug-tools.component.html',
  styleUrls: ['./debug-tools.component.scss']
})
export class DebugToolsComponent implements OnInit {

  // constructor(
  //   private dynamicIsland : DynamicIslandComponent
  //   ) {}

  number!: string;
  text!: string;
  imgUrl!: string;

  ngOnInit() {
    this.number = "";
    this.text = "";
    this.imgUrl = "";
  }

  onCall() {
    this.number = (<HTMLInputElement>document.getElementById("number")).value;
    console.log('Call #', this.number);
    // new DynamicIslandComponent().dynamicNotif('call', this.number);
  }

  onMsg() {
    this.number = (<HTMLInputElement>document.getElementById("number")).value;
    this.text = (<HTMLInputElement>document.getElementById("text")).value;
    console.log('Msg #', this.number, 'Text #', this.text);
  }

  onNotif() {
    this.number = (<HTMLInputElement>document.getElementById("number")).value;
    this.text = (<HTMLInputElement>document.getElementById("text")).value;
    this.imgUrl = (<HTMLInputElement>document.getElementById("imgUrl")).value;
    console.log('Name #', this.number, 'Text #', this.text, 'img #', this.imgUrl);
  }
}
