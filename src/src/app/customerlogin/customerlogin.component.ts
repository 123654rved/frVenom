import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor() { }
  customerlogin=new FormGroup({
    email:new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required),
  
   })
   loginUser(){
    console.warn(this.customerlogin.value)
   }
  get email(){
    return this.customerlogin.get('email');
  
  }
  get pass(){
    return this.customerlogin.get('pass');
  
  }

  ngOnInit(): void {
  }

}
