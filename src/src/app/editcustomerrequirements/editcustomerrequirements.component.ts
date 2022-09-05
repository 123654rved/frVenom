import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustomerrequirements',
  templateUrl: './editcustomerrequirements.component.html',
  styleUrls: ['./editcustomerrequirements.component.css']
})
export class EditcustomerrequirementsComponent implements OnInit {

  constructor() { }
  customerrequirements=new FormGroup({
    care:new FormControl('',Validators.required),
    urgency:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    religion:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),

   })
   loginUser(){
    console.warn(this.customerrequirements.value)
   }
  get care(){
    return this.customerrequirements.get('care');
  
  }
  get urgency(){
    return this.customerrequirements.get('urgency');
  
  }
  get gender(){
    return this.customerrequirements.get('gender');
  
  }
  get religion(){
    return this.customerrequirements.get('religion');
  
  }
  get category(){
    return this.customerrequirements.get('category');
  
  }




  ngOnInit(): void {
  }

}
