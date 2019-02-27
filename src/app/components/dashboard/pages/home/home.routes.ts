import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {RegisterComponent} from '../../../account/pages/register/register.component';
import {DriverComponent} from '../../../account/pages/driver/driver.component';
import {PaymentDetailsComponent} from '../../../account/pages/payment-details/payment-details.component';



const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        data: {
            breadcrumb: 'Home'
        },
    },
    {path:'Register' ,component:RegisterComponent},
  {path:'Driver',component:DriverComponent},
  {path:'Payment_Details',component:PaymentDetailsComponent}






];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutes {}
