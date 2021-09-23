import { AuthService } from './modules/user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  title = 'kroeger-website';

  listMenus: string[] = [
    'Início',
    'Serviços',
    'Contratar agora',
    'Sobre nós',
    'Dúvidas frequentes',
    'Meu carrinho',
  ];

  ngOnInit() {
    this.authService.currentUser = {
      id: 1,
      name: 'name',
      email: 'email',
      cpfCnpj: 'cpfCnpj',
      phone: 'phone',
      username: 'username',
      password: 'password',
      birthday: new Date().toLocaleDateString()
    };
  }
}
