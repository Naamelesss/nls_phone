import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nls_phone';

  time!: Date;
  devMode!: boolean;

  ngOnInit() {
    this.time = new Date();
    this.devMode = true;
  }
}
