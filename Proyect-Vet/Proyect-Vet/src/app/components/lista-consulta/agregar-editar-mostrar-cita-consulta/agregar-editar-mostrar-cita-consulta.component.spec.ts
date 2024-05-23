import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMostrarCitaConsultaComponent } from './agregar-editar-mostrar-cita-consulta.component';

describe('AgregarEditarMostrarCitaConsultaComponent', () => {
  let component: AgregarEditarMostrarCitaConsultaComponent;
  let fixture: ComponentFixture<AgregarEditarMostrarCitaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarMostrarCitaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarMostrarCitaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
