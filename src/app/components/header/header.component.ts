import { IUser } from './../../shared/models/User.model';
import { AuthService } from './../../modules/user/auth.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output()
  clickMenu = new EventEmitter();

  larguraDaTela: number = window.screen.width;

  constructor(public authService: AuthService) {}

  openMenu(): void {
    this.clickMenu.emit();
  }

  teste() {
    console.log(this.authService);
  }
}
