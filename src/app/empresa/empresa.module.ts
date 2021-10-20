import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormularioComponent } from './empresa-formulario/empresa-formulario.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    EmpresaListComponent,
    EmpresaFormularioComponent
  ]
})
export class EmpresaModule { }
