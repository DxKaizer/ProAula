import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuerylistService } from '../../../services/Consultas.Service';
import { querylist } from '../../../interfaces/Querylist';

@Component({
  selector: 'app-vista-detalles-consulta',
  templateUrl: './vista-detalles-consulta.component.html',
  styleUrls: ['./vista-detalles-consulta.component.css']
})
export class VistaDetallesConsultaComponent implements OnInit {
  consulta: querylist | undefined;
  Id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private _QueryService: QuerylistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Id = Number(params.get('id'));
      if (this.Id) {
        this._QueryService.getConsulta(this.Id).subscribe((data: querylist) => {
          this.consulta = data;
        });
      }
    });
  }
}
