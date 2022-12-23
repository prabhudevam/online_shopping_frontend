import { Component, OnInit } from '@angular/core';
import { SignupRequest } from 'user';
import { HelperserviceService } from '../helperservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
s:SignupRequest;
rol:String;
  constructor(private ser:HelperserviceService,private rt:Router) { }

  ngOnInit(): void {
    this.s=new SignupRequest();
    this.s.role.add(this.rol);
  }
  register(){
   
this.ser.register(this.s).subscribe(
  data=>{console.log("succesfully regestered");
this.rt.navigate(['login']);},
error=>{
  console.log("error while adding");
}

)
  }

}
