import { ValidatorFn } from "@angular/forms";
import { ValidatorPositiveNumberService } from "./validator-positive-number.service";

export function posNumberValidator() : ValidatorFn{
    return (control) => {
        let validator = new ValidatorPositiveNumberService()
        let valid = !control.value || validator.validate_positive_number(control.value)
        return valid ? null : {posNumber:true}
    }
    
}