import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FrontComponent } from './front/front.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    FrontComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    NavbarComponent,
    FrontComponent
  ]
})
export class HomeModule { }
