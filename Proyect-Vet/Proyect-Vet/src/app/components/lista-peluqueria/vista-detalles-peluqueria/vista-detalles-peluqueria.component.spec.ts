import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetallesPeluqueriaComponent } from './vista-detalles-peluqueria.component';

describe('VistaDetallesPeluqueriaComponent', () => {
  let component: VistaDetallesPeluqueriaComponent;
  let fixture: ComponentFixture<VistaDetallesPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDetallesPeluqueriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDetallesPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
