import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa.model'


@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  private readonly ENDPOINT = "empresa";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.getFullUrl());
  }

  findById(id: number): Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.getFullUrl()}/${id}`);
  }

  save(empresa: Empresa): Observable<Empresa>{
    if(empresa?.id){
      return this.httpClient.put<Empresa>(this.getFullUrl()+'/'+empresa.id, empresa);
    }
    return this.httpClient.post<Empresa>(this.getFullUrl(), empresa);
  }

  delete(id: number): Observable<Empresa>{
    return this.httpClient.delete<Empresa>(`${this.getFullUrl()}/${id}`);
  }

  private getFullUrl(): string {
    return environment.apiUrl+this.ENDPOINT;
  }

}
