import { Component } from '@angular/core';
import { peluqueria } from '../../interfaces/QueryListPelu';
import { PeluqueriaService } from '../../services/peluqueria.service';

@Component({
  selector: 'app-lista-peluqueria',
  templateUrl: './lista-peluqueria.component.html',
  styleUrl: './lista-peluqueria.component.css'
})
export class ListaPeluqueriaComponent {

  listQuery: peluqueria[] = [];
  filteredList: peluqueria[] = [];
  searchText: string = '';
  constructor(private _Query: PeluqueriaService) {}

  ngOnInit(): void {
    this.getListQuery();
  }

  getListQuery() {
    this._Query.getConsultas().subscribe((data: peluqueria[]) => {
      console.log(data);
      this.listQuery = data;
      this.filteredList = data; 
    });
  }

  filterList() {
    if (this.searchText.trim() === '') {
      this.filteredList = this.listQuery;
    } else {
      this.filteredList = this.listQuery.filter(item =>
        item.NombreDueno.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  deteleQuery(ID: number) {
    this._Query.deleteConsulta(ID).subscribe(data => {
      this.getListQuery();
    });
  }
}
