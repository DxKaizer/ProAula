import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetallesConsultaEsComponent } from './vista-detalles-consulta-es.component';

describe('VistaDetallesConsultaEsComponent', () => {
  let component: VistaDetallesConsultaEsComponent;
  let fixture: ComponentFixture<VistaDetallesConsultaEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDetallesConsultaEsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDetallesConsultaEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
