
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { querylistEs } from '../../../interfaces/QueryListEs';
import { ConsultasEsService } from '../../../services/consultas-es.service';

@Component({
  selector: 'app-vista-detalles-consulta-es',
  templateUrl: './vista-detalles-consulta-es.component.html',
  styleUrl: './vista-detalles-consulta-es.component.css'
})
export class VistaDetallesConsultaEsComponent {
  consulta: querylistEs | undefined;
  Id: number | null = null;

  constructor(private _Query: ConsultasEsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Id = Number(params.get('id'));
      if (this.Id) {
        this._Query.getConsulta(this.Id).subscribe((data: querylistEs) => {
          this.consulta = data;
        });
      }
    });
  }
}
