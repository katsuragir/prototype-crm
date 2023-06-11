import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [

    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent
  ]
})
export class ModulesModule { }
