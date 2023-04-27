import { TestBed } from '@angular/core/testing';

import { ValidatorDateService } from './validator-date.service';

describe('ValidatorDateService', () => {
  let service: ValidatorDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return false for date 15.25.2002', () => {
    let s = service.validate_date('15.25.2002')
    expect(s).toBe(false);
  })
  it('should return false for date 29.02.2002', () => {
    let s = service.validate_date('29.02.2002')
    expect(s).toBe(false);
  })
  it('should return true for date 15.12.2002', () => {
    let s = service.validate_date('15.12.2002')
    expect(s).toBe(true);
  })
  it('should return false for date 15.45.2000', () => {
    let s = service.validate_date('15.45.2000')
    expect(s).toBe(false);
  })
  it('should return false for date 15.12.1000', () => {
    let s = service.validate_date('15.12.1000')
    expect(s).toBe(false);
  })

});
