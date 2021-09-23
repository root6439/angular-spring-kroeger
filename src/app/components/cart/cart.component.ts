import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../modules/user/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

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

  formCart = new FormGroup({
    name: this.name,
    cpfCnpj: this.cpfCnpj,
    email: this.email,
    phone: this.phone,
    birthday: this.birthday
  });

  step = 0;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

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
