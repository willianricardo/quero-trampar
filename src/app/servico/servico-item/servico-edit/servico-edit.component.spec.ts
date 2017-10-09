import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoEditComponent } from './servico-edit.component';

describe('ServicoEditComponent', () => {
  let component: ServicoEditComponent;
  let fixture: ComponentFixture<ServicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
