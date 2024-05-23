import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetallesConsultaComponent } from './vista-detalles-consulta.component';

describe('VistaDetallesConsultaComponent', () => {
  let component: VistaDetallesConsultaComponent;
  let fixture: ComponentFixture<VistaDetallesConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDetallesConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDetallesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
