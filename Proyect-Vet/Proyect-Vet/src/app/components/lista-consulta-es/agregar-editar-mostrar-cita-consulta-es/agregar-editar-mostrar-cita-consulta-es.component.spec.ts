import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMostrarCitaConsultaEsComponent } from './agregar-editar-mostrar-cita-consulta-es.component';

describe('AgregarEditarMostrarCitaConsultaEsComponent', () => {
  let component: AgregarEditarMostrarCitaConsultaEsComponent;
  let fixture: ComponentFixture<AgregarEditarMostrarCitaConsultaEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarMostrarCitaConsultaEsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarMostrarCitaConsultaEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
