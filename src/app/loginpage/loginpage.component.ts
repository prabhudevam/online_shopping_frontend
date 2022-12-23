import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'loginreq';
import { HelperserviceService } from '../helperservice.service';
import { JwtResponse } from 'jwtreponse';
import { Router } from '@angular/router';
//import { User } from 'user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
u:LoginRequest;
jwtobj:JwtResponse;
a:String;
x:Number=0;
loggedin:Number=0;
tkn:String;

  constructor(private ser:HelperserviceService,private rt:Router) { 
   
    
  } 
  
  
  ngOnInit(): void {
    

    this.u=new LoginRequest();
   
  }
authen(){
  this.jwtobj=new JwtResponse();
  this.ser.fetchjwt(this.u).subscribe(
    
    
    data=>{
      
      this.jwtobj=data;
      let k=localStorage.setItem("item1",JSON.stringify(this.jwtobj.accessToken));
      let v=localStorage.setItem("uname",JSON.stringify(this.jwtobj.username));
      console.log(this.jwtobj.accessToken);
    this.loggedin=1;
  },
    error=>{console.log("error occured");
  alert("details entered are wrong,please check again");
  this.rt.navigate(['login']);
  }
  )
  
  
  
  
  
  let x1=this.jwtobj.roles;
   if(this.loggedin==1){

   
  for(this.a in x1){
if(this.a=="admin"){
this.rt.navigate(['adminhomepage']);
this.x=1;
}
  }
  if(this.x==0){
    this.rt.navigate(['home']);
  }
   }


}
signup(){
  this.rt.navigate(['signup']);
}


}
