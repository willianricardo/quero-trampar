import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCandidatoComponent } from './servico-candidato.component';

describe('ServicoCandidatoComponent', () => {
  let component: ServicoCandidatoComponent;
  let fixture: ComponentFixture<ServicoCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
