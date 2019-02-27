import { Component, ViewContainerRef, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import {Driver} from '../../../../driver';
import {DriverService} from '../../../../driver.service';
import {FormGroup} from '@angular/forms';

@Component({
    templateUrl: './register.component.html',
    styleUrls: [
        './register.component.scss'
    ],
  providers:[DriverService],
})
export class RegisterComponent implements OnInit {
    public agree: boolean = false;
    public constructor(private _driverService:DriverService) {}

    ngOnInit(): void {
        $('body').removeAttr('class');
        $('body').addClass('hole-transition');
        $('body').addClass('register-page');
    }
    drivers=[];



    onSubmitAddDriver(driver:Driver){
      console.log(driver);
      this._driverService.addDriver(driver)
        .subscribe(resNewDriver=>{
          this.drivers.push(resNewDriver);

        })

    }



}
