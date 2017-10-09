import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfissionalFavoritoComponent } from './perfil-profissional-favorito.component';

describe('PerfilProfissionalFavoritoComponent', () => {
  let component: PerfilProfissionalFavoritoComponent;
  let fixture: ComponentFixture<PerfilProfissionalFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilProfissionalFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProfissionalFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
