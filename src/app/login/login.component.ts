import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{FormBuilder,Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Passwordvalidator } from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor( private fb : FormBuilder) { }

 registrationForm=this.fb.group({
  name: ['',Validators.required],
  dob: ['',Validators.required],

  age: ['',Validators.required],
  emailid: ['',Validators.required],
  password: ['',Validators.required],
  confirmpassword: ['',Validators.required],
 },{validator:Passwordvalidator});

}
  