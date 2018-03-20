import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { CanalService } from "./services/canal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logoutError: string;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myCanalService: CanalService
  ) {}
  
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
