import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedsModule } from '../../../../shareds/shareds.module';

import { cCheckboxModule } from '../../../../shareds/cCheckbox/cCheckbox.module';
import { cRadioModule } from '../../../../shareds/cRadio/cRadio.module';
import { cSelectModule } from '../../../../shareds/cSelect/cSelect.module';
import { cTabModule } from '../../../../shareds/cTab/cTab.module';
import { cBoxModule } from '../../../../shareds/cBox/cBox.module';
import { cDatepickerModule } from '../../../../shareds/cDatepicker/cDatepicker.module';
import { ParentModalModule } from '../../../../shareds/_modals/parent-modal.component';
import { TabModalModule } from '../../../../shareds/_modals/tab-modal.component';
import {RegisterComponent} from '../../../account/pages/register/register.component';
import {DriverComponent} from '../../../account/pages/driver/driver.component';
import {PaymentDetailsComponent} from '../../../account/pages/payment-details/payment-details.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutes,
        ModalModule,
        BsDropdownModule,
        SharedsModule,
        ParentModalModule,
        TabModalModule,
        cCheckboxModule,
        cRadioModule,
        cSelectModule,
        cTabModule,
        cBoxModule,
        cDatepickerModule,

    ],
    declarations: [
        HomeComponent,
        RegisterComponent,
        DriverComponent,
        PaymentDetailsComponent



    ],
    providers: [

    ]
})
export class HomeModule { }
