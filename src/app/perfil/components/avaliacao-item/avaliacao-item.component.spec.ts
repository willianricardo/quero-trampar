import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoItemComponent } from './avaliacao-item.component';

describe('AvaliacaoItemComponent', () => {
  let component: AvaliacaoItemComponent;
  let fixture: ComponentFixture<AvaliacaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
