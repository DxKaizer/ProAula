import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultaEsComponent } from './lista-consulta-es.component';

describe('ListaConsultaEsComponent', () => {
  let component: ListaConsultaEsComponent;
  let fixture: ComponentFixture<ListaConsultaEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaConsultaEsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaConsultaEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
