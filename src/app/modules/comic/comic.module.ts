import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicComponent } from './components/comic/comic.component';
import { ComicContainerComponent } from './page/comic/comic.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ComicComponent,
    ComicContainerComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    SharedModule,
    MatDialogModule,
    ScrollingModule
  ]
})

export class ComicModule { }
