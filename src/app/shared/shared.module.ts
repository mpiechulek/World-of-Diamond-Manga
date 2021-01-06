import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HamburgerMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HamburgerMenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
