import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { CanalComponent } from "./components/canal/canal.component"

const routes: Routes = [{
    path: "signup",
    component: SignupComponent
},
{
    path: "login",
    component: LoginComponent
},
{
    path: "canals",
    component: CanalComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}