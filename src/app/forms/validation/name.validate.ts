import {AbstractControl} from "@angular/forms";

export const nameValidate = (control:AbstractControl) =>{


  if (control.value.match(/[0-9]/g)){
    return {
      invalid : true
    }

  }else {

  }
  console.log(control.invalid)

  return null

}
