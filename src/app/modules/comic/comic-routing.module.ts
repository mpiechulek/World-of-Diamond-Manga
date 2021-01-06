import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicContainerComponent } from './page/comic/comic.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comic',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: ComicContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
