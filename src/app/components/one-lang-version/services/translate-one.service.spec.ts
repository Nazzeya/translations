import { TestBed } from '@angular/core/testing';

import { TranslateOneService } from './translate-one.service';

describe('TranslateOneService', () => {
  let service: TranslateOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
