import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

 
 customerdetail=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  mobile:new FormControl('',Validators.required),
  pass:new FormControl('',Validators.required),
  copass:new FormControl('',Validators.required),

 })
 loginUser(){
  console.warn(this.customerdetail.value)
 }
get name(){
  return this.customerdetail.get('name');

}
get email(){
  return this.customerdetail.get('email');

}
get mobile(){
  return this.customerdetail.get('mobile');

}
get pass(){
  return this.customerdetail.get('pass');

}
get copass(){
  return this.customerdetail.get('copass');

}


   ngOnInit(): void {
  }
  
  

}