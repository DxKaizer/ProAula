import { Component, OnInit } from '@angular/core';
import { QuerylistService } from '../../services/Consultas.Service';
import { querylist } from '../../interfaces/Querylist';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {
  listQuery: querylist[] = [];
  filteredList: querylist[] = [];
  searchText: string = '';

  constructor(private _Query: QuerylistService) {}

  ngOnInit(): void {
    this.getListQuery();
  }

  getListQuery() {
    this._Query.getConsultas().subscribe((data: querylist[]) => {
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
        item.Propietario.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  deteleQuery(ID: number) {
    this._Query.deleteConsulta(ID).subscribe(data => {
      this.getListQuery();
    });
  }
}
