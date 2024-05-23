import { Injectable } from '@angular/core';
import { environment } from "../../environments/environments";
import { HttpClient } from '@angular/common/http';
import { querylistEs } from '../interfaces/QueryListEs';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultasEsService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/consultaEspecializada/';
  }

  getConsultas(): Observable<querylistEs[]> {
    return this.http.get<querylistEs[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  deleteConsulta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveConsulta(product: querylistEs): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getConsulta(id: number): Observable<querylistEs> {
    return this.http.get<querylistEs>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateConsulta(id: number, product: querylistEs): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }

}
