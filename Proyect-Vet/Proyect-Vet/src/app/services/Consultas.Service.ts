import { Injectable } from "@angular/core";
import { environment } from "../../environments/environments";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { querylist } from "../interfaces/Querylist";

@Injectable({
  providedIn: 'root'
})
export class QuerylistService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/consulta/';
  }

  getConsultas(): Observable<querylist[]> {
    return this.http.get<querylist[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteConsulta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveConsulta(product: querylist): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getConsulta(id: number): Observable<querylist> {
    return this.http.get<querylist>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateConsulta(id: number, product: querylist): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}
