import { CpfPipe } from './../shared/pipes/cpf.pipe';
import { CnpjPipe } from './../shared/pipes/cnpj.pipe';
import { SimNaoPipe } from './../shared/pipes/sim-nao.pipe';
import { EmpresaService } from './empresa.service';
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
    EmpresaFormularioComponent,
    SimNaoPipe,
    CnpjPipe,
    CpfPipe
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
