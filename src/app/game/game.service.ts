import { environment } from './../../environments/environment';

import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

private readonly ENDPOINT = "game";

  constructor(private httpClient: HttpClient) {
  }

findAll(): Observable<Game[]> {
  return this.httpClient.get<Game[]>(this.getFullUrl());
}

findById(id: number): Observable<Game>{
  return this.httpClient.get<Game>(`${this.getFullUrl()}/${id}`);
}

save(game: Game): Observable<Game>{
  if(game?.id){
    return this.httpClient.put<Game>(this.getFullUrl()+'/'+game.id, game);
  }
  return this.httpClient.post<Game>(this.getFullUrl(), game);
}

delete(id: number): Observable<Game>{
  return this.httpClient.delete<Game>(`${this.getFullUrl()}/${id}`);
}

private getFullUrl(): string {
  return environment.apiUrl+this.ENDPOINT;
}



}
