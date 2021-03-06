import { MentoriaListaModule } from './mentoria-lista/mentoria-lista.module';
import { EmpresaModule } from './empresa/empresa.module';
import { RouterModule } from '@angular/router';
import { GameModule } from './game/game.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConteudoHomeComponent } from './home/conteudo-home/conteudo-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConteudoHomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    GameModule,
    RouterModule,
    EmpresaModule,
    MentoriaListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
