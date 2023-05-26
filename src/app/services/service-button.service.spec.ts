import { TestBed } from '@angular/core/testing';

import { ServiceButtonService } from './service-button.service';

describe('ServiceButtonService', () => {
  let service: ServiceButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
