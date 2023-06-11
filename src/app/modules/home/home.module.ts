import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RootComponent } from './root/root.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { RupiahPipe } from 'src/app/shared/pipe/money.pipe';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [
    RootComponent,
    BannerComponent,
    ProductComponent,
    RupiahPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  exports: [
    RupiahPipe
  ]
})
export class HomeModule { }
