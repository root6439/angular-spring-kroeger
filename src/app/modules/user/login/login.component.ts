import { CartService } from './../../../components/services/cart/cart.service';
import { IUser } from './../../../shared/models/User.model';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean;
  rememberUser: boolean;
  hide: boolean;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  formLogin = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.authService
      .login(this.username.value, this.password.value)
      .subscribe((resp: IUser[]) => {
        if (resp.length > 0) {
          this.toastr.success('Sucesso!', 'Login realizado!');
          this.authService.currentUser = resp[0];
          this.router.navigate(['/products']);
          this.cartService.shop = {
            user: this.authService.currentUser,
            products: [],
            date: new Date(),
          };
        } else {
          this.toastr.error('Erro!', 'Login ou senha incorretos!');
        }
        this.loading = false;
      });
  }

  // login() {
  //   this.loading = true;
  //   this.authService.login(this.username.value, this.password.value).subscribe(
  //     (resp: IUser) => {
  //       this.toastr.success('Sucesso!', 'Login realizado!');
  //       this.authService.currentUser = resp;
  //       this.loading = false;
  //       console.log(resp);

  //     },
  //     (err: HttpErrorResponse) => {
  //       this.toastr.success('Erro!', 'Usuário não encontrado!');
  //       console.log(err);
  //       this.loading = false;
  //     }
  //   );
  // }
}
