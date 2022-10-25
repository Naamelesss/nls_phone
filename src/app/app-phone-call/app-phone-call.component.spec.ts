import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneCallComponent } from './app-phone-call.component';

describe('AppPhoneCallComponent', () => {
  let component: AppPhoneCallComponent;
  let fixture: ComponentFixture<AppPhoneCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
