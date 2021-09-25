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

  listMenus: any[] = [
    { title: 'Início', path: '' },
    { title: 'Serviços', path: '' },
    { title: 'Sobre nós', path: ' ' },
    { title: 'Meu carrinho', path: 'cart' },
  ];

  ngOnInit() {}
}
