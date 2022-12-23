import { Component, OnInit } from '@angular/core';
import { HelperserviceService } from '../helperservice.service';
import { SignupRequest } from 'signup';
import { cart } from '../cart';
import { Observable } from 'rxjs';
import { Product } from '../homepage/product';
import { Usercart } from './Usercart';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  u=new SignupRequest();
cp:Observable<Usercart[]>;
pro:Array<Product>=[];
idarr:Array<Number>=[];
usercart:Usercart;
  constructor(private hs:HelperserviceService) { }

  ngOnInit(): void {
    this.usercart=new Usercart();
    let un=JSON.parse(localStorage.getItem("uname"));
  
  this.hs.fetchubid(un).subscribe(
    data=>{
      this.u=data;
      console.log(this.u.id)
      localStorage.setItem("x",this.u.id)
      console.log(" fetched user id for cartpage");
      
    },
    error=>{
      console.log("cant get user id in cartpage");
    }
  )
  let userid=localStorage.getItem("userid");
  let x=localStorage.getItem("x");
  this.hs.getcartdetails(x).subscribe(
    data=>{
      this.cp=data;
      console.log(this.cp);
      console.log("cart details for this id fethed");
     
    },
    error=>{
      console.log("cartdetails fetching error");

    }

  )
  
    
  }
  
  

}
