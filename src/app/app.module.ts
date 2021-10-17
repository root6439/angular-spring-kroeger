import { AuthService } from './modules/user/auth.service';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatCardModule } from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CartService } from './modules/shop/cart/cart.service';
import { CartComponent } from './modules/shop/cart/cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormShopComponent } from './shared/card-form-shop/card-form-shop.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductService } from './modules/product/product.service';

import { HomeComponent } from './home/home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CardFormShopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    IvyCarouselModule,
  ],
  providers: [AuthService, ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
