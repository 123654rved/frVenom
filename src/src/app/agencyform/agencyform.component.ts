import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agencyform',
  templateUrl: './agencyform.component.html',
  styleUrls: ['./agencyform.component.css']
})
export class AgencyformComponent implements OnInit {

  constructor() { }
  customerlogin=new FormGroup({
    hospitalname:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    reason:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required),
   })
   loginUser(){
    console.warn(this.customerlogin.value)
   }
  get email(){
    return this.customerlogin.get('email');
  
  }
  get hospitalname(){
    return this.customerlogin.get('hospitalname');
  
  }
  get mobile(){
    return this.customerlogin.get('mobile');
  
  }
  get city(){
    return this.customerlogin.get('city');
  
  }
  get reason(){
    return this.customerlogin.get('reason');
  
  }

  get message(){
    return this.customerlogin.get('message');
  
  }


  ngOnInit(): void {
  }

}
