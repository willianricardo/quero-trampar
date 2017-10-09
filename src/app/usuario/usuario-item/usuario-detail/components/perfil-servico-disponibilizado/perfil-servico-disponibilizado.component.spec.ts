import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicoDisponibilizadoComponent } from './perfil-servico-disponibilizado.component';

describe('PerfilServicoDisponibilizadoComponent', () => {
  let component: PerfilServicoDisponibilizadoComponent;
  let fixture: ComponentFixture<PerfilServicoDisponibilizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilServicoDisponibilizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilServicoDisponibilizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
