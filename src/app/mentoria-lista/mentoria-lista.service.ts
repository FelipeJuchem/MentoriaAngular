import { environment } from './../../environments/environment.prod';

import { Lista } from './mentoria-lista.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentoriaListaService {

  private readonly ENDPOINT = "lista";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(this.getFullUrl());
  }

  private getFullUrl(): string {
    return environment.apiUrl+this.ENDPOINT;
  }
}
