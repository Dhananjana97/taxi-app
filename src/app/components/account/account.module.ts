//import {DriverComponent} from './pages/driver/driver.component';

require('@admin-lte/bootstrap/js/bootstrap.min.js');
require('@admin-lte/dist/js/app.min.js');
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AccountRoutes } from './account.routes';
import { AccountComponent } from './account.component';

import { SharedsModule } from '../../shareds/shareds.module';
//import {DriverRoutes} from './pages/driver/driver.routes';
import {DriverModule} from './pages/driver/driver.module';
import {DriverService} from '../../driver.service';
import {Driver} from '../../driver';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        SharedsModule,
        AccountRoutes,
      //DriverRoutes,
      DriverModule
    ],
    declarations: [
        AccountComponent,
       // DriverComponent,
        Driver,
       PaymentDetailsComponent,


    ],
    providers: [
        DriverService
    ]
})
export class AccountModule {}
