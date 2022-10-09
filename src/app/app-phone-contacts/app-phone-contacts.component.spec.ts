import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneContactsComponent } from './app-phone-contacts.component';

describe('AppPhoneContactsComponent', () => {
  let component: AppPhoneContactsComponent;
  let fixture: ComponentFixture<AppPhoneContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
