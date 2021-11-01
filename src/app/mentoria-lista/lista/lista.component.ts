import { Lista } from './../mentoria-lista.model';
import { Component, Input, OnInit } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() lista!: Lista[];

  constructor() { }

  ngOnInit() {

  }

  onSelect(item: Lista){
    item.selecionado = !item.selecionado;
  }


}
