import { ListaComponent } from './mentoria-lista/lista/lista.component';
import { MenuComponent } from './mentoria-lista/menu/menu.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormularioComponent } from './game/game-formulario/game-formulario.component';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { EmpresaFormularioComponent } from './empresa/empresa-formulario/empresa-formulario.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"game",
    children: [
      {
        path: "",
        component: GameListComponent
      },
      {
        path: "new",
        component: GameFormularioComponent
      },
      {
        path: ":id",
        component: GameFormularioComponent
      }
    ]
  },
  {
    path:"empresa",
    children: [
      {
        path: "",
        component: EmpresaListComponent
      },
      {
        path: "new",
        component: EmpresaFormularioComponent
      },
      {
        path: ":id",
        component: EmpresaFormularioComponent
      }
    ]
  },
  {
    path: "menu-lista",
    children: [
      {
        path:"",
        component: MenuComponent
      },
      {
        path:"",
        component: ListaComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
