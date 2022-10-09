import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactsComponent } from './app-contacts.component';

describe('AppContactsComponent', () => {
  let component: AppContactsComponent;
  let fixture: ComponentFixture<AppContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
