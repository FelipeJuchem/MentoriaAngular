import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-game-formulario',
  templateUrl: './game-formulario.component.html',
  styleUrls: ['./game-formulario.component.scss']
})
export class GameFormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(private gameService: GameService, private router: Router, private route:ActivatedRoute, private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.criarForm();
    this.editar();
  }

  criarForm(): void {
    this.form = this.fb.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      id: [null]
    });
  }

  navegarParaHome(): void {
    this.router.navigate([''])
  };

  onSubmit(): void {
    if(this.form.valid){
      this.gameService.save(this.form.value).subscribe(resposta =>
        {
          this.router.navigate(['game']);
        });
    }
  }

  editar(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.gameService.findById(+params.get('id')!).pipe(delay(1000)).subscribe(resposta => {
          this.form.setValue(resposta);
        },erro => {
          alert(JSON.stringify(erro))
        });
      }
    })
  }

}
