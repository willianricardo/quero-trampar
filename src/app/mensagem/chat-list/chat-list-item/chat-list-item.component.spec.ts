import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListItemComponent } from './chat-list-item.component';

describe('ChatListItemComponent', () => {
  let component: ChatListItemComponent;
  let fixture: ComponentFixture<ChatListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
