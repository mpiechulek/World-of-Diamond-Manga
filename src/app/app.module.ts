import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home/home-layout.component';
import { AboutLayoutComponent } from './layout/about/about-layout.component';
import { ComicLayoutComponent } from './layout/comic/comic-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AboutLayoutComponent,
    ComicLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
