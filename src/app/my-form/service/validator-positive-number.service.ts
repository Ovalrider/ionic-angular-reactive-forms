import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPositiveNumberService {
  validate_positive_number(value: string): boolean {
    let val = parseInt(value)
    return val > 0 && val < 1e+10;
  }
  constructor() { }
}
