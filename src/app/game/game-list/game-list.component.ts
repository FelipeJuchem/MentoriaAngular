import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../game.service';
import { Game } from './../game.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  lista: Game[] = [];
  game!: Game;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.gameService.findAll().subscribe(retorno =>
      this.lista = retorno);
  }

  navegarParaHome(): void {
    this.router.navigate([''])
  };

  deletar(id: number): void  {
    this.gameService.delete(id).subscribe(()=>{
      this.ngOnInit();
    })
  }
}
