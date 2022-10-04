import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugToolsComponent } from './debug-tools.component';

describe('DebugToolsComponent', () => {
  let component: DebugToolsComponent;
  let fixture: ComponentFixture<DebugToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
