import {FormGroup, ValidatorFn} from "@angular/forms";


export const passwordConfirmValidate = (control1:string , control2 : string) =>{


  return (formGroup:FormGroup):{ [key:string] : boolean } | null => {

    console.log("nothing")
    return null
  }
}
