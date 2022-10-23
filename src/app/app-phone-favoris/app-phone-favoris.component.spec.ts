import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhoneFavorisComponent } from './app-phone-favoris.component';

describe('AppPhoneFavorisComponent', () => {
  let component: AppPhoneFavorisComponent;
  let fixture: ComponentFixture<AppPhoneFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhoneFavorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhoneFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
