import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {validateName} from "../validators/validateName";

@Component({
  selector: 'app-form-again-validetors',
  templateUrl: './form-again-validetors.component.html',
  styleUrls: ['./form-again-validetors.component.css']
})
export class FormAgainValidetorsComponent implements OnInit {

color:FormControl = new FormControl(["" , [Validators.required , validateName]])
  // to use something match cooler  u can usr form builder
  coolForm: FormGroup = new FormGroup({});
  constructor(private fb : FormBuilder) {
    this.coolForm =  this.fb.group({
      color: this.color.value,
      love : ["" , [Validators.pattern(".*com$")]],

      address : this.fb.group({
        city : "" ,
        street : ""
      })
    })
    // this.coolForm.get("color")?.disable()

    // this.coolForm.valueChanges.subscribe(change => {
    //   console.log(change.address.city )
    //   const r =  /[ا-ي]/g
    //   if (change.address.city.match(r)) {
    //     console.log("true")
    //   }else {
    //     console.log(false )
    //   }
    // })


  }

  ngOnInit(): void {
  }


  formBuilderSubmit(){

    console.log( this.coolForm.value)
  }


}
