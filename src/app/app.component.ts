import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kroeger-website';

  listMenus: string[] = [
    'Início',
    'Serviços',
    'Contratar agora',
    'Sobre nós',
    'Dúvidas frequentes',
    'Meu carrinho'
  ];
}
