import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ErrorPageComponent } from './error-page.component';


@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorPageRoutingModule,
    SharedModule
  ]
})
export class ErrorPageModule { }
