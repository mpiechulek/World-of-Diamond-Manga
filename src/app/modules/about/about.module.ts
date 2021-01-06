import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './page/about/about.container';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AboutContainerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
