import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicComponent } from './components/comic/comic.component';
import { ComicContainerComponent } from './page/comic/comic.container';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ComicComponent,
    ComicContainerComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    SharedModule   
  ]
})
export class ComicModule { }
