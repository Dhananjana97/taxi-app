import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';



import { SharedsModule } from '../../../../shareds/shareds.module';
import { cCheckboxModule } from '../../../../shareds/cCheckbox/cCheckbox.module';
import {payment_detailsRoutes} from './payment_details.routes';
import {PaymentDetailsComponent} from './payment-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    SharedsModule,
    cCheckboxModule,
    payment_detailsRoutes,


  ],
  declarations: [
    PaymentDetailsComponent
  ],
  providers: [

  ]
})
export class RegisterModule {}
