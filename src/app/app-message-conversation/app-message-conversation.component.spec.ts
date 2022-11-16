import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMessageConversationComponent } from './app-message-conversation.component';

describe('AppMessageConversationComponent', () => {
  let component: AppMessageConversationComponent;
  let fixture: ComponentFixture<AppMessageConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMessageConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMessageConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
