import { Component, OnInit } from '@angular/core';
import { Product } from '../homepage/product';
import { HelperserviceService } from '../helperservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
pro=new Product();
  constructor(private hs:HelperserviceService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this.ar.snapshot.paramMap.get('pid'));
    this.hs.fetchpbid(id).subscribe(
      data=>{
        this.pro=data;
      }
    )
  }

}
