import { Routes } from '@angular/router';
import { LoginComponent } from './Authentic/login/login.component';
import { LandingPpageComponent } from './landing-ppage/landing-ppage.component';
import { RegisterloginComponent } from './Authentic/registerlogin/registerlogin.component';

export const routes: Routes = [
    {path:'',component:LandingPpageComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterloginComponent},

];
