import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output()
  clickMenu = new EventEmitter();

  larguraDaTela: number = window.screen.width;

  openMenu(): void {
    this.clickMenu.emit();
  }
}
