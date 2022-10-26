import { TestBed } from '@angular/core/testing';

import { Accountsmt5Service } from './accountsmt5.service';

describe('Accountsmt5Service', () => {
  let service: Accountsmt5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Accountsmt5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
