import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameFormularioComponent } from './game-formulario/game-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);


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
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ]
})
export class GameModule { }
