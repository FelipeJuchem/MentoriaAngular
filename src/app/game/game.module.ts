import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameFormularioComponent } from './game-formulario/game-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GameListComponent,
    GameFormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class GameModule { }
