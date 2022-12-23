import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './viewpro/adminhome.component';
import { CartpageComponent } from './cartpage/cartpage.component';



const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomepageComponent},
  {path:'viewpro/:pid',component:AdminhomeComponent},
  {path:'login',component:LoginpageComponent},
  {path:'cartpage',component:CartpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
