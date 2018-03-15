import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import "rxjs/add/operator/map";

@Injectable()
export class CanalService {

  constructor( private myHttp: Http ) { }

  getAllCanals(){
    return this.myHttp.get(`${environment.apiBase}/api/canals`,
    { withCredentials: true })
    .map(res => res.json())
  }

}
