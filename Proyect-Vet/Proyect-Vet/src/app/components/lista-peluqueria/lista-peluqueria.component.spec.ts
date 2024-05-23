import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeluqueriaComponent } from './lista-peluqueria.component';

describe('ListaPeluqueriaComponent', () => {
  let component: ListaPeluqueriaComponent;
  let fixture: ComponentFixture<ListaPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPeluqueriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
