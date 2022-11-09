import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IncomeNotif } from '../models/apps.model';
import { DebugToolsComponent } from '../debug-tools/debug-tools.component';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-dynamic-island-call',
  templateUrl: './dynamic-island-call.component.html',
  styleUrls: ['./dynamic-island-call.component.scss']
})
// @ViewChild(DynamicIslandCallComponent) debugComponent: DebugTool
export class DynamicIslandCallComponent implements OnInit {
  @Input() incomeNotif!: IncomeNotif;
  // @Output() debugToolComponent: EventEmitter<boolean> = new EventEmitter();
  // @ViewChild(DebugToolsComponent) private debugToolComponent!: DebugToolsComponent
  constructor(private appService: AppsService,
              private router: Router
              ) { }

  // test: string = " ";

  labelText!: string;

  ngOnInit(): void {
    // this.test = this.incomeNotif;
    // this.test = this.incomeNotif.number
    // console.log(this.test)

    const search = this.appService.searchContactByNumber(this.incomeNotif.number)
    if (search) {
      this.labelText = search.firstName + " " + search.lastName;
    } else {
      this.labelText = this.incomeNotif.number;
    }
  }

  @Output() finishNotif: EventEmitter<void> = new EventEmitter<void>();
  closeNotif() {
    // this.debugTools.notif = false
    // this.debugToolComponent.onFinish()
    this.finishNotif.emit()
  }
  onAcceptCall() {
    if (this.incomeNotif.number !== '') {
      this.closeNotif()
      const navigationExtas: NavigationExtras = {
        state: {
          customData: this.incomeNotif.number,
        }
      };
      this.router.navigate(['/phone/clavier/call'], navigationExtas)
    }
  }
  onDeclineCall() {
    this.closeNotif();
  }
}
