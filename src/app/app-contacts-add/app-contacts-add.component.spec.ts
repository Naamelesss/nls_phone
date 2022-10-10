import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactsAddComponent } from './app-contacts-add.component';

describe('AppContactsAddComponent', () => {
  let component: AppContactsAddComponent;
  let fixture: ComponentFixture<AppContactsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
