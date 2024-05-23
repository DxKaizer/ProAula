import { Component } from '@angular/core';
import { peluqueria } from '../../../interfaces/QueryListPelu';
import { ActivatedRoute } from '@angular/router';
import { PeluqueriaService } from '../../../services/peluqueria.service';

@Component({
  selector: 'app-vista-detalles-peluqueria',
  templateUrl: './vista-detalles-peluqueria.component.html',
  styleUrl: './vista-detalles-peluqueria.component.css'
})
export class VistaDetallesPeluqueriaComponent {
  consulta: peluqueria | undefined;
  Id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private _QueryService: PeluqueriaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Id = Number(params.get('id'));
      if (this.Id) {
        this._QueryService.getConsulta(this.Id).subscribe((data: peluqueria) => {
          this.consulta = data;
        });
      }
    });
  }
}
