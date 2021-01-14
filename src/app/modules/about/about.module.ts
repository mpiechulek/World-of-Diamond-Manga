import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './page/about/about.container';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AboutContainerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class AboutModule { }
