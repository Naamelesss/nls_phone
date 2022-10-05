import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss']
})
export class DynamicIslandComponent implements OnInit {

  number!: number;
  text1!: string;
  text2!: string;

  constructor() { }

  ngOnInit(): void {
  }

  dynamicNotif() {
    
  }
}
