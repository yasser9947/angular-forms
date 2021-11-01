import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {nameValidate} from "./name.validate";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  myForm: FormGroup = new FormGroup({})
  firstName: FormControl = new FormControl("" , nameValidate);
  lastName: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {

    this.creatForm()
    console.log(this.myForm)
  }

  ngOnInit(): void {
  }

  updateProfile = () => null

  onSubmit = () => null

  creatForm = () => {
    for (const key in this) { // @ts-ignore
      this[key] instanceof  FormControl && this.myForm.addControl( key,  this[key])
    }
  }
}
