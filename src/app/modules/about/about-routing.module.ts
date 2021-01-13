import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainerComponent } from './page/about/about.container';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about',
        component: AboutContainerComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
