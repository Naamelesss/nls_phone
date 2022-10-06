import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneComponent } from './app-phone.component';

describe('AppPhoneComponent', () => {
  let component: AppPhoneComponent;
  let fixture: ComponentFixture<AppPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
