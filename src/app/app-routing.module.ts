import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then(
        m => m.HomeModule
      )
  },
  // {
  //   path: '',
  //   component: HomeLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/company/company.module').then(
  //       m => m.CompanyModule
  //     )
  // },
  // {
  //   path: '',
  //   component: HomeLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/company/company.module').then(
  //       m => m.CompanyModule
  //     )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
