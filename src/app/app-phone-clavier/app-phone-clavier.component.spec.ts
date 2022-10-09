import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneClavierComponent } from './app-phone-clavier.component';

describe('AppPhoneClavierComponent', () => {
  let component: AppPhoneClavierComponent;
  let fixture: ComponentFixture<AppPhoneClavierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneClavierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneClavierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
