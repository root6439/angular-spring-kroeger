import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  hide: boolean = true;

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

  constructor() {}

  createUser() {
    console.log(this.email);

  }

  verifyInputPassword(group: FormGroup) {
    let senha = group.controls.senha.value;
    let confirmarSenha = group.controls.confirmarSenha.value;

    return senha == confirmarSenha
      ? null
      : {
          notSame: true,
        };
  }
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl,
    form: FormGroupDirective | NgForm
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
