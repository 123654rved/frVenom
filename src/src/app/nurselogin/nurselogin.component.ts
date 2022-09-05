import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nurselogin',
  templateUrl: './nurselogin.component.html',
  styleUrls: ['./nurselogin.component.css']
})
export class NurseloginComponent implements OnInit {

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
