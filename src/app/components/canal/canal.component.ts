import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { CanalService } from "../../services/canal.service";
import { environment } from "../../../environments/environment";


@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {
  baseUrl = environment.apiBase;

  logoutError: string;
  canalListError: string;
  canals: any;
  currentUser: string;


  title: string = 'Google Map Yayy';
  zoom: number = 10
  lat: number = 25.7215
  lng: number = -80.2684

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myCanalService: CanalService
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then(resultFromApi => {
        this.currentUser = resultFromApi;
        console.log("user is: ", resultFromApi);
        this.getTheCanals()
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    // this.getTheCanals();
  }

  getTheCanals() {
    this.myCanalService.getAllCanals()
    .subscribe(allTheCanals => {
      // console.log("allTheCanals: ", allTheCanals)
        this.canals = allTheCanals;
        console.log("canals are here:m ===========", this.canals)
      },
      () => {
        this.canalListError = "Sorry, no canals.";
      }
    );
  } // close getTheCanals()





  logMeOutPls() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOutPls()
}
