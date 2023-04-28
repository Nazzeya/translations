import { TestBed } from '@angular/core/testing';

import { TranslateAllService } from './translate-all.service';

describe('TranslateAllService', () => {
  let service: TranslateAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
