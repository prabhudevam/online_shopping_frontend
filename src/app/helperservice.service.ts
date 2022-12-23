import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginRequest } from 'loginreq';
import { Observable } from 'rxjs/internal/Observable';
import { SignupRequest } from 'signup';
import { cart } from './cart';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { Usercart } from './cartpage/Usercart';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelperserviceService {
  constructor(private http:HttpClient) { 
   

  }


  fetchjwt(u:LoginRequest):Observable<any>{
    return this.http.post<any>("http://35.90.149.212:8080/api/auth/signin",u);
  
    }
    register(s:SignupRequest):Observable<any>{
      return this.http.post<any>("http://35.90.149.212:8080/api/auth/signup",s);
    }
    fetchproductlist():Observable<any>{
      
      let t="Bearer "+JSON.parse(localStorage.getItem("item1"));
           return this.http.get<any>("http://35.90.149.212:8080/api/test/home",{headers:new HttpHeaders().set("Authorization",t)});
    }
    fetchpbid(pid:Number):Observable<any>{
      let t="Bearer "+JSON.parse(localStorage.getItem("item1"));
   
      return this.http.get<any>("http://35.90.149.212:8080/api/test/getpbid/"+pid,{headers:new HttpHeaders().set("Authorization",t)});
    }
    fetchubid(uid:String):Observable<any>{
      let t="Bearer "+JSON.parse(localStorage.getItem("item1"));
     
      return this.http.get<any>("http://35.90.149.212:8080/api/test/getubid/"+uid,{headers:new HttpHeaders().set("Authorization",t)});


    }
    addtocart(ct:Usercart):Observable<any>{
      let t="Bearer "+JSON.parse(localStorage.getItem("item1"));
             
      return this.http.post<any>("http://35.90.149.212:8080/api/test/addtocart",ct,{headers:new HttpHeaders().set("Authorization",t)});
    }
    getcartdetails(u:any):Observable<any>{
      let t="Bearer "+JSON.parse(localStorage.getItem("item1"));
      return this.http.get<any>("http://35.90.149.212:8080/api/test/getcd/"+u,{headers:new HttpHeaders().set("Authorization",t)});
    }
}
