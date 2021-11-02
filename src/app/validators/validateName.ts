import {AbstractControl} from "@angular/forms";

export const validateName=(control:AbstractControl)=>{

  console.log("is valodot " , control)

  if (control.value.match(/[0-9]/g)){
    return {invalidName:true}
  }

  return null

}
