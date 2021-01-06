import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutLayoutComponent } from './layout/about/about-layout.component';
import { ComicLayoutComponent } from './layout/comic/comic-layout.component';
import { HomeLayoutComponent } from './layout/home/home-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then(
        m => m.HomeModule
      )
  },
  {
    path: 'about',
    component: AboutLayoutComponent,
    loadChildren: () =>
      import('./modules/about/about.module').then(
        m => m.AboutModule
      )
  },
  {
    path: 'comic',
    component: ComicLayoutComponent,
    loadChildren: () =>
      import('./modules/comic/comic.module').then(
        m => m.ComicModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
