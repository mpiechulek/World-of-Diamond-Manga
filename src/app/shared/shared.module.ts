import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ComicSliderDialogComponent } from './components/comic-slider-dialog/comic-slider-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HamburgerMenuComponent,
    HeaderComponent,
    ComicSliderDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ComicSliderDialogComponent],
  exports: [
    FooterComponent,
    NavbarComponent,
    HamburgerMenuComponent,
    HeaderComponent    
  ]  
})
export class SharedModule { }
