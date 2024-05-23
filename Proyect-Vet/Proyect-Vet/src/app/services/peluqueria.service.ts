import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { peluqueria } from '../interfaces/QueryListPelu';

@Injectable({
  providedIn: 'root'
})
export class PeluqueriaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Peluqueria/';
  }

  getConsultas(): Observable<peluqueria[]> {
    return this.http.get<peluqueria[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteConsulta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveConsulta(product: peluqueria): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getConsulta(id: number): Observable<peluqueria> {
    return this.http.get<peluqueria>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateConsulta(id: number, product: peluqueria): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}
