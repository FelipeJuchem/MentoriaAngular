import { MatButtonModule } from '@angular/material/button';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class MentoriaListaModule { }
