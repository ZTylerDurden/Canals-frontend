import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';


// My services
import { AuthService } from "./services/auth.service";
import { CanalService } from "./services/canal.service";

// My Routes
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { CanalComponent } from './components/canal/canal.component';
import { NewCanalComponent } from './components/new-canal/new-canal.component';

// image stuff
import { FileUploadModule } from "ng2-file-upload";
import { CanalDetailsComponent } from './components/canal-details/canal-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CanalComponent,
    NewCanalComponent,
    CanalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDuDQOQxEWBJVweGkNa21xbYIIdKWDmykg"
    })
  ],
  providers: [AuthService, CanalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
