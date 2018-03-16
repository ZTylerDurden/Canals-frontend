import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { CanalService } from "../../services/canal.service";


@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {
  logoutError: string;
  canalListError: string;
  canals: any;
  currentUser: string;

  //Google Maps API, leave deactivated for now
  // title: string = 'Google Map Yayy';
  // lat: number = 51.678418;
  // lng: number = 7.809007;

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
        console.log("canals", this.canals)
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
