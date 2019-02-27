import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Driver} from './driver';
import {headersToString} from 'selenium-webdriver/http';
@Injectable()
export class DriverService {

  private _getUrl="/api/drivers";
  private _postUrl="/api/adddriver";


  constructor(private _http:Http) { }

  getDrivers(){
    return this._http.get(this._getUrl)
      .map((response:Response)=>response.json());

  }

  addDriver(driver:Driver) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log('11111111111111111111');
    console.log(JSON.stringify(driver));

    return this._http.post(this._postUrl, JSON.stringify(driver), options)
      .map((response: Response) => response.json());


  }



}
