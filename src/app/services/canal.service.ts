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

  getId(id){
    return this.myHttp.get(`${environment.apiBase}/api/canals/${id}`,
          { withCredentials: true })
          .toPromise()
          .then(res => res.json())
          // .map(res => res.json())
  }

  creatNewCanal(canalData){
    return this.myHttp.post(`${environment.apiBase}/api/canals`, canalData, 
    {withCredentials: true})
    .toPromise()
    .then(res => res.json());

  }
  updateCanal(id, updates){
    return this.myHttp.put(`${environment.apiBase}/api/canals/${id}`, updates, { withCredentials: true })
    .map(res => res.json());
  }

  deleteCanal(id){
    return this.myHttp.delete(`${environment.apiBase}/api/canals/${id}`,
        { withCredentials: true })
        .toPromise()
  }

  // reviews:
  addReview(canalId,dataToSend){
    return this.myHttp.post(`${environment.apiBase}/api/canals/${canalId}/reviews`,
     dataToSend, 
     {withCredentials: true})
     .toPromise()
     .then(res => res.json())
  }

}
