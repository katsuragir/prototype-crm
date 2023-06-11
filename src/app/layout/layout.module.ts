import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../modules/home/home.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
