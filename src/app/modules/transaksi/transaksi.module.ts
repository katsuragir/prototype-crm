import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaksiRoutingModule } from './transaksi-routing.module';
import { CartComponent } from './cart/cart.component';
import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    TransaksiRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransaksiModule { }
