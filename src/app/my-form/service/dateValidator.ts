import { ValidatorFn } from "@angular/forms";
import { ValidatorDateService } from "./validator-date.service";

export function dateValidator() : ValidatorFn{
    return (control) => {
        let validator = new ValidatorDateService()
        let valid = !control.value || validator.validate_date(control.value)
        return valid? null :  {dateValidator: true}
    }
}