import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops/shops.component';
import { ItemsComponent } from './items/items.component';
import { ROUTES } from './admin.routes';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShopsComponent, ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class AdminModule {}
