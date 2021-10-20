import { Router } from '@angular/router';
import { Empresa } from './../empresa.model';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent implements OnInit {

  lista: Empresa[] = [];

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.empresaService.findAll().subscribe(resposta =>
      this.lista = resposta);
  }

  navegarParaHome(): void {
    this.router.navigate([''])
  };

  deletar(id: number): void  {
    this.empresaService.delete(id).subscribe(()=>{
      this.ngOnInit();
    })
  }

}
