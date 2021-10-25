import { CnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-empresa-formulario',
  templateUrl: './empresa-formulario.component.html',
  styleUrls: ['./empresa-formulario.component.scss']
})

export class EmpresaFormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(private empresaService: EmpresaService, private router: Router, private route:ActivatedRoute, private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.criarForm();
    this.editar();
  }

  criarForm(): void {
    this.form = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(10)]],
      ramo: ["", Validators.required],
      inicioDasAtividades: [Date, Validators.required],
      cnpj: ["", [Validators.required, CnpjValidator]],
      cpf: ["", [Validators.required]],
      id: [null]
    });
  }

  navegarParaHome(): void {
    this.router.navigate([''])
  };

  onSubmit(): void {
    if(this.form.valid){
      this.empresaService.save(this.form.value).subscribe(resposta =>
        {
          this.router.navigate(['empresa']);
        });
    }
  }

  editar(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.empresaService.findById(+params.get('id')!).pipe(delay(1000)).subscribe(resposta => {
          this.form.setValue(resposta);
        },erro => {
          alert(JSON.stringify(erro))
        });
      }
    })
  }

}
