import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  hide: boolean = true;
  loading: boolean;

  //TODO: implementar validação de duas etapas para senha
  nome = new FormControl('', Validators.required);
  cpfCnpj = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  telefone = new FormControl('');
  nomeDeUsuario = new FormControl('', Validators.required);
  senha = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmarSenha = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  formNewUser = new FormGroup({
    nome: this.nome,
    cpfCnpj: this.cpfCnpj,
    email: this.email,
    telefone: this.telefone,
    nomeDeUsuario: this.nomeDeUsuario,
    senha: this.senha,
    confirmarSenha: this.confirmarSenha,
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  // createUser() {
  //   this.loading = true;
  //   this.authService.createUser(this.formNewUser.value).subscribe(
  //     () => {
  //       this.toastr.success('Sucesso!', 'Usuário criado');
  //       this.loading = false;
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log(err);
  //       this.toastr.error('Erro!', 'Não foi possível realizar o cadastro');
  //       this.loading = false;
  //     }
  //   );
  // }

  verifyInputPassword(group: FormGroup) {}
}
