import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesRoutingModule,
    SharedModule
  ]
})
export class PricesModule { }
