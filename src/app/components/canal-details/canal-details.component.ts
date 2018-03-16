import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { CanalService } from "../../services/canal.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-canal-details',
  templateUrl: './canal-details.component.html',
  styleUrls: ['./canal-details.component.css']
})
export class CanalDetailsComponent implements OnInit {
  canal = <any>{}
  currentUser = <any>{};
  baseUrl = environment.apiBase;
  updatedCanalName: String;
  updatedLat: String;
  updatedLng: String;
  updatedDescription: String;
  updatedFishTypes: Number;
  updatedCanal: Object = {};

  constructor(
    private myCanalService: CanalService,
    private myAuthService: AuthService,
    private myRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then(res =>{
        this.currentUser = res;
        console.log("user id:", this.currentUser._id)
      })
      // Even if you don't do anything on error,
      // catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    this.myRoute.params.subscribe(params => {
      this.getCanalDetails(params["id"]);
    });
  }

  getCanalDetails(id){
    this.myCanalService.getId(id)
      .then( res => {
          this.canal = res;
          console.log("canal owner id is: ", this.canal.owner)
      } )
      .catch()
  }

  doTheUpdate(id, formData){
    this.myCanalService.updateCanal(id, formData)
    // console.log("formData",formData)
    
    const formInfo = formData.form.controls;
    this.updatedCanalName = formInfo.canalName.value;
    this.updatedLat = formInfo.lat.value;
    this.updatedLng = formInfo.lng.value;
    this.updatedDescription = formInfo.description.value;
    this.updatedFishTypes = formInfo.fishTypes.value;
    this.sendUpdatesToApi(id)
  }
  sendUpdatesToApi(id){
    this.updatedCanal = {
        canalName: this.updatedCanalName,
        lat: this.updatedLat,
        lng: this.updatedLng,
        description: this.updatedDescription,
        fishTypes: this.updatedFishTypes
      }
      this.myCanalService.updateCanal(id, this.updatedCanal)
      .toPromise()
      .then( res=>{
        this.myRouter.navigate(['/canals'])
      })
      .catch( err => {
        console.log("Error in the update:", err)
      } )
  }

  deleteThisCanal(){
    if (!confirm("Are you sure?")) {
      return;
    }
    this.myCanalService.deleteCanal(this.canal._id)
      .then( res => {
        this.myRouter.navigate(['/canals'])
      })
      .catch( err => {
        console.log("Error in deleting:", err)
      })
  }

}
