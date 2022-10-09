import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactsListComponent } from './app-contacts-list.component';

describe('AppContactsListComponent', () => {
  let component: AppContactsListComponent;
  let fixture: ComponentFixture<AppContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
