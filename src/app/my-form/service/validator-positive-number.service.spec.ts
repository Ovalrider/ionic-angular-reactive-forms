import { TestBed } from '@angular/core/testing';

import { ValidatorPositiveNumberService } from './validator-positive-number.service';

describe('ValidatorPositiveNumberService', () => {
  let service: ValidatorPositiveNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPositiveNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return true for positive number 5', () => {
    let s = service.validate_positive_number("5")
    expect(s).toBe(true);
  });
  it('should return false for negative number -5', () => {
    let s = service.validate_positive_number("-5")
    expect(s).toBe(false);
  });
  it('should return false for 0', () => {
    let s = service.validate_positive_number("0")
    expect(s).toBe(false);
  });
  it('should return false for 0.9', () => {
    let s = service.validate_positive_number("0.9")
    expect(s).toBe(false);
  });
});
