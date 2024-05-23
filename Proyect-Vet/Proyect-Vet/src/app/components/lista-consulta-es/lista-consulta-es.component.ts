import { Component } from '@angular/core';
import { querylistEs } from '../../interfaces/QueryListEs';
import { ConsultasEsService } from '../../services/consultas-es.service';

@Component({
  selector: 'app-lista-consulta-es',
  templateUrl: './lista-consulta-es.component.html',
  styleUrl: './lista-consulta-es.component.css'
})
export class ListaConsultaEsComponent {
  listQuery: querylistEs[] = [];
  filteredList: querylistEs[] = [];
  searchText: string = '';

  constructor(private _Query: ConsultasEsService) {}
  ngOnInit(): void {
    this.getListQuery();
  }

  getListQuery() {
    this._Query.getConsultas().subscribe((data: querylistEs[]) => {
      console.log(data);
      this.listQuery = data;
      this.filteredList = data; // Initial filtered list is the same as the original list
    });
  }

  filterList() {
    if (this.searchText.trim() === '') {
      this.filteredList = this.listQuery;
    } else {
      this.filteredList = this.listQuery.filter(item =>
        item.MedicoResponsable.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  deteleQuery(ID: number) {
    this._Query.deleteConsulta(ID).subscribe(data => {
      this.getListQuery();
    });
  }
}
