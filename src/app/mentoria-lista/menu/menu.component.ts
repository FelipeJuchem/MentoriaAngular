import { ListaComponent } from './../lista/lista.component';
import { Lista } from './../mentoria-lista.model';
import { MentoriaListaService } from './../mentoria-lista.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  lista: Lista[] = [];
  lista1: Lista[] = [];
  lista2: Lista[] = [];

  @ViewChild(ListaComponent) child!:ListaComponent;

  constructor(private mentoriaListaService: MentoriaListaService) { }

  ngOnInit(): void {
    this.mentoriaListaService.findAll().subscribe(resposta => {
      this.lista = [...resposta];
      this.lista1 = this.lista;
      this.lista2 = [];
    });
    this.sort(this.lista1, this.lista2);
  }

  adicionarLista2() {
    this.lista1.forEach(el => {
      if(el.selecionado == true){
        this.lista1 = this.lista1.filter(x => !x.selecionado);
        this.lista2.push(el!);
        el.selecionado = false;
      }
    })
    this.sort(this.lista1, this.lista2);
  }

  adicionarLista1() {
    this.lista2.forEach(el => {
      if(el.selecionado == true){
        this.lista2 = this.lista2.filter(x => !x.selecionado);
        this.lista1.push(el!);
        el.selecionado = false;
      }
    })
    this.sort(this.lista1, this.lista2);
  }

  passarLista1ParaLista2() {
    this.lista1.forEach(el => {
      this.lista2.push(el)
      el.selecionado = false;
    })
    this.lista1 = [];
    this.sort(this.lista1, this.lista2);
  }

  passarLista2ParaLista1() {
    this.lista2.forEach(el => {
      this.lista1.push(el)
      el.selecionado = false;
    })
    this.lista2 = [];
    this.sort(this.lista1, this.lista2);
  }

  sort(lista1: Lista[], lista2: Lista[]){
    lista1.sort((a,b) => (a.id < b.id ? -1 : 1));
    lista2.sort((a,b) => (a.id < b.id ? -1 : 1));
  }




}
