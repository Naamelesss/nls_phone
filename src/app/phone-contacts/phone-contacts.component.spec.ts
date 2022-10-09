import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContactsComponent } from './phone-contacts.component';

describe('PhoneContactsComponent', () => {
  let component: PhoneContactsComponent;
  let fixture: ComponentFixture<PhoneContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
