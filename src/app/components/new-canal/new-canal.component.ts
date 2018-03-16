import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { CanalService } from "../../services/canal.service";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-new-canal',
  templateUrl: './new-canal.component.html',
  styleUrls: ['./new-canal.component.css']
})
export class NewCanalComponent implements OnInit {

  
// Check how to receive numbers and arrays in Angular2
  canalData = {
    canalName: "",
    lat: "",
    lng: "",
    description: "",
    fishTypes: "",
    reviews: [],
    observations: []
  }

  savingErr: string;

  myCoolUploader = new FileUploader({
    url: environment.apiBase + "/api/canals",
    itemAlias: "canalImage"
  });

  constructor(private myCanalService: CanalService, private myAuthService: AuthService, 
    private myRouter: Router ) { }

    ngOnInit() {
      this.myAuthService
        .checklogin()
        // if success, we are logged in.
        .then()
   
        .catch(err => {
          console.log(err);
          this.myRouter.navigate(['/']);
        });
    }

    saveNewCanal() {
      if (this.myCoolUploader.getNotUploadedItems().length === 0) {
        this.saveCanalNoImage();
      } else {
        this.saveCanalWithImage();
      }
    }

    saveCanalNoImage(){
      this.myCanalService.creatNewCanal(this.canalData)
      .then(res => {
        // Check how to receive numbers and arrays in Angular2
      this.canalData = {
      canalName: "",
      lat: "",
      lng: "",
      description: "",
      fishTypes: "",
      reviews: [],
      observations: []
      }
      this.savingErr = "";
      this.myRouter.navigate(["/canals"])
    }
  )
      .catch( err => { this.savingErr = "Something is wrong with saving."})
  }
  
  private saveCanalWithImage(){
    this.myCoolUploader.onBuildItemForm = (item, form) => {
      form.append('canalName', this.canalData.canalName);
      form.append('lat', this.canalData.lat);
      form.append('lng', this.canalData.lng);
      form.append('description', this.canalData.description);
      form.append('fishTypes', this.canalData.fishTypes);
      form.append('reviews', this.canalData.reviews);
      form.append('observations', this.canalData.observations);
    }
    this.myCoolUploader.onSuccessItem = (item, response) =>{
      this.canalData = {
        canalName: "",
        lat: "",
        lng: "",
        description: "",
        fishTypes: "",
        reviews: [],
        observations: []
        };
        this.savingErr = ""
        this.myRouter.navigate(["/canals"]);
    }
    this.myCoolUploader.onErrorItem = (item, response) => {
      this.savingErr = "Saving canal with image went bad. Sorry!";
    }
    this.myCoolUploader.uploadAll();
  }
  

}
