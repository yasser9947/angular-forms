import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  faveColorControl:FormControl = new FormControl()
  favecolor:string = ""
  profileForm:FormGroup ;

  arr = ["ss" , "ss"]
  name:FormControl = new FormControl()
  constructor(private fb:FormBuilder) {
    this.profileForm = this.fb.group({
        firstName : "" ,
        lastName:  "",
        address:this.fb.group({
          city: "",
          street:""
        })
  })
    // this.profileForm.valueChanges.subscribe(ele => console.log(ele))

  }

  ngOnInit(): void {
  }
  updateNAme= () => console.log(this.profileForm.value)

  onSubmit = () =>{
    console.log(this.profileForm.value)

  }
  updateProfile = () => this.profileForm.patchValue(
    { lastName : " "}
  )
}
// profileForm:FormGroup = new FormGroup({
//   firstName : new FormControl() ,
//   lastName: new FormControl() ,
//   address:new FormGroup({
//     city:new FormControl() ,
//     street:new FormControl()
//   })
// });
