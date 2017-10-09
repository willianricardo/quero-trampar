import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditServicoInscritoComponent } from './perfil-edit-servico-inscrito.component';

describe('PerfilEditServicoInscritoComponent', () => {
  let component: PerfilEditServicoInscritoComponent;
  let fixture: ComponentFixture<PerfilEditServicoInscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEditServicoInscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditServicoInscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
