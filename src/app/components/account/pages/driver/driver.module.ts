import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { DriverComponent } from './driver.component';

import { SharedsModule } from '../../../../shareds/shareds.module';
import { cCheckboxModule } from '../../../../shareds/cCheckbox/cCheckbox.module';
import {DriverRoutes} from './driver.routes';
import {DriverService} from '../../../../driver.service';
import {Driver} from '../../../../driver';





@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,

        JsonpModule,
        SharedsModule,
        cCheckboxModule,
        DriverRoutes



    ],
    declarations: [
      DriverComponent,


      Driver,


    ],
    providers: [
      DriverService
        
    ]
})
export class DriverModule {}
