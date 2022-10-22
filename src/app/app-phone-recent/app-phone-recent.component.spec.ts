import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneRecentComponent } from './app-phone-recent.component';

describe('AppPhoneRecentComponent', () => {
  let component: AppPhoneRecentComponent;
  let fixture: ComponentFixture<AppPhoneRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
