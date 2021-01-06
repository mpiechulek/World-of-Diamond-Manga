import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicComponent } from './components/comic/comic.component';
import { ComicContainerComponent } from './page/comic/comic.container';

@NgModule({
  declarations: [
    ComicComponent,
    ComicContainerComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule    
  ]
})
export class ComicModule { }
