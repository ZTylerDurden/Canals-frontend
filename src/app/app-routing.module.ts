import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { CanalComponent } from "./components/canal/canal.component";
import { NewCanalComponent } from './components/new-canal/new-canal.component';
import { CanalDetailsComponent } from './components/canal-details/canal-details.component';

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
},
{
    path: "add-canal",
    component: NewCanalComponent
},
{
    path: "canals/:id",
    component: CanalDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}