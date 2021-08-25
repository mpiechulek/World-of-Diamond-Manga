import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main-layout.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',    
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/about/about.module').then(
            m => m.AboutModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/comic/comic.module').then(
            m => m.ComicModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            m => m.ContactModule
          )
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
