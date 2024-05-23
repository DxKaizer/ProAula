import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMostrarCitaPeluqueriaComponent } from './agregar-editar-mostrar-cita-peluqueria.component';

describe('AgregarEditarMostrarCitaPeluqueriaComponent', () => {
  let component: AgregarEditarMostrarCitaPeluqueriaComponent;
  let fixture: ComponentFixture<AgregarEditarMostrarCitaPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarMostrarCitaPeluqueriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarMostrarCitaPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
