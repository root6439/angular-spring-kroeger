import { CartService } from './../services/cart/cart.service';
import { Estado, ESTADOS } from './../../shared/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../modules/user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  // user data
  name = new FormControl(
    this.authService.currentUser.name,
    Validators.required
  );
  cpfCnpj = new FormControl(
    this.authService.currentUser.cpfCnpj,
    Validators.required
  );
  email = new FormControl(this.authService.currentUser.email, [
    Validators.required,
    Validators.email,
  ]);
  phone = new FormControl(
    this.authService.currentUser.phone,
    Validators.required
  );
  birthday = new FormControl(
    this.authService.currentUser.birthday,
    Validators.required
  );

  // client address
  cep = new FormControl('', Validators.required);
  state = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  district = new FormControl('', Validators.required);
  street = new FormControl('', Validators.required);
  number = new FormControl('', Validators.required);
  complement = new FormControl('', Validators.required);

  formCart = new FormGroup({
    name: this.name,
    cpfCnpj: this.cpfCnpj,
    email: this.email,
    phone: this.phone,
    birthday: this.birthday,
    cep: this.cep,
    state: this.state,
    city: this.city,
    district: this.district,
    street: this.street,
    number: this.number,
    complement: this.complement,
  });

  step = 0;

  estados: Estado[] = ESTADOS;

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.formCart.controls['name'].disable();
    this.formCart.controls['cpfCnpj'].disable();
    this.formCart.controls['birthday'].disable();
    this.formCart.controls['email'].disable();
    this.formCart.controls['phone'].disable();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  shop() {}
}
