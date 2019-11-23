import { TestBed } from '@angular/core/testing';

import { AuthFrontService } from './auth-front.service';

describe('AuthFrontService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFrontService = TestBed.get(AuthFrontService);
    expect(service).toBeTruthy();
  });
});
