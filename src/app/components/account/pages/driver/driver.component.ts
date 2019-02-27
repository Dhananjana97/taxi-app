import { Component, ViewContainerRef, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import {DriverService} from '../../../../driver.service';
import {Driver} from '../../../../driver';








@Component({
    templateUrl: './driver.component.html',
    styleUrls: [
        './driver.component.scss'
    ],
    providers:[DriverService],


})
export class DriverComponent implements OnInit {


    drivers:Array<Driver>;
  search_qry: any;

    public constructor(private _driverService:DriverService) {}

    ngOnInit(){
        this._driverService.getDrivers()
          .subscribe(res =>this.drivers=res);

        console.log(this.drivers);

    }


    testsearch(){
      if (this.search_qry != ""){
        this.drivers=this.drivers.filter(res=> {
          return res.fullname.toLocaleLowerCase().match(this.search_qry.toLocaleLowerCase());
        })
      } else {
        this.ngOnInit()
      }








    }


  search() {
      if (this.search_qry !=""){
        this.drivers=this.drivers.filter(res=>{
          if (res.fullname.toLocaleLowerCase().match(this.search_qry.toLocaleLowerCase()) != null ) {
            console.log('11111111');
            return (res.fullname.toLocaleLowerCase().match(this.search_qry.toLocaleLowerCase()));
          } else {
            return ((res.vehiclenumber).toLocaleLowerCase().match(this.search_qry.toLocaleLowerCase()))

          }

        })
      } else if(this.search_qry == ""){
        this.ngOnInit();
      }

  }
}
