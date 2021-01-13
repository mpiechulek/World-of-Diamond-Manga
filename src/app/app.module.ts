import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main/main-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
 
  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
