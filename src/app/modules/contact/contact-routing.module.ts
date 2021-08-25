import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactContainerComponent } from './page/contact/contact.container';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: ContactContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
