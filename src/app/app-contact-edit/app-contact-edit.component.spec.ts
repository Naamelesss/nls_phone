import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactEditComponent } from './app-contact-edit.component';

describe('AppContactEditComponent', () => {
  let component: AppContactEditComponent;
  let fixture: ComponentFixture<AppContactEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
