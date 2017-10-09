import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditProfissionalFavoritoComponent } from './perfil-edit-profissional-favorito.component';

describe('PerfilEditProfissionalFavoritoComponent', () => {
  let component: PerfilEditProfissionalFavoritoComponent;
  let fixture: ComponentFixture<PerfilEditProfissionalFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEditProfissionalFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditProfissionalFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
