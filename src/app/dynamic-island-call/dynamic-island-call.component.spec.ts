import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIslandCallComponent } from './dynamic-island-call.component';

describe('DynamicIslandCallComponent', () => {
  let component: DynamicIslandCallComponent;
  let fixture: ComponentFixture<DynamicIslandCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicIslandCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicIslandCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
