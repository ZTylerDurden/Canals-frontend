import { Injectable } from '@angular/core';
// Import Http
import { Http } from '@angular/http';

// Import ToPromise
import 'rxjs/add/operator/toPromise';

// Import Enviroment
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private myHttp: Http) { }

  signup(componentInfo) {
    return this.myHttp.post(`${environment.apiBase}/api/signup`, {
      signUpUsername: componentInfo.username,
      signUpPassword: componentInfo.password
    }, 
    // { withCredentials: true }
  ).toPromise()
    .then((res) => res.json());
  }

  login(componentInfo) {
    return (
      this.myHttp
        .post(
          `${environment.apiBase}/api/login`,

          // Form body information to send to the back end (req.body)
          {
            loginUsername: componentInfo.username,
            loginPassword: componentInfo.password
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close login()

  logout() {
    return (
      this.myHttp
        .post(
          `${environment.apiBase}/api/logout`,

          // Nothing to send to the back end (req.body)
          {},

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close logout()

  
  checklogin() {
    return (
      this.myHttp
        .get(
          `${environment.apiBase}/api/checklogin`,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close checklogin()
}
