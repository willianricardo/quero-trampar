import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoItemComponent } from './servico-item.component';

describe('ServicoItemComponent', () => {
  let component: ServicoItemComponent;
  let fixture: ComponentFixture<ServicoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
