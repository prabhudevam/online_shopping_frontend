import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { AdminhomeComponent } from './viewpro/adminhome.component';
import { CartpageComponent } from './cartpage/cartpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignupComponent,
    HomepageComponent,
    AdminhomeComponent,
    CartpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
