import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-again',
  templateUrl: './form-again.component.html',
  styleUrls: ['./form-again.component.css']
})
export class FormAgainComponent implements OnInit {

  myColor:FormControl = new FormControl(); // to control the input !

  // form group
  profileForm : FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()

  })


  // to use something match cooler  u can usr form builder
    coolForm: FormGroup = new FormGroup({});
  constructor(private fb : FormBuilder) {
     this.coolForm =  this.fb.group({
       color:"red",
       love : "",
        address : this.fb.group({
         city : "" ,
          street : ""
       })
     })

  }

  ngOnInit(): void {
  }

  submut =()=> {
    console.log("goooood" , this.profileForm.value)

  }
  update () {
    // to update some value you can use the patch
    this.profileForm.patchValue({
      firstName: "hi "
    })

  }

  formBuilderSubmit(){

    console.log( this.coolForm.value)
  }

}
