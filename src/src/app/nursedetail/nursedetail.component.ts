import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nursedetail',
  templateUrl: './nursedetail.component.html',
  styleUrls: ['./nursedetail.component.css']
})
export class NursedetailComponent implements OnInit {

  constructor() { }
  nursedetail=new FormGroup({
    name:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    job:new FormControl('',Validators.required),
    hospitalname:new FormControl('',Validators.required),
    years:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    resume:new FormControl('',Validators.required),
    identity:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),

   })
   
   loginUser(){
    console.warn(this.nursedetail.value)
   }
  get name(){
    return this.nursedetail.get('name');
  
  }
  get mobile(){
    return this.nursedetail.get('mobile');
  
  }
  get email(){
    return this.nursedetail.get('email');
  
  }
  get location(){
    return this.nursedetail.get('location');
  
  }
  get years(){
    return this.nursedetail.get('years');
  
  }
  get hospitalname(){
    return this.nursedetail.get('hospitalname');
  
  }
  get category(){
    return this.nursedetail.get('category');
  
  }
  get job(){
    return this.nursedetail.get('job');
  
  }

  get resume(){
    return this.nursedetail.get('resume');
  
  }
  get identity(){
    return this.nursedetail.get('identity');
  
  }
  get qualification(){
    return this.nursedetail.get('qualification');
  
  }

  ngOnInit(): void {
  }

}
