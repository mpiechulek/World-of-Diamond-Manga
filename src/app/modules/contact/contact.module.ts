import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactContainerComponent } from './page/contact/contact.container';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [ContactContainerComponent, ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
