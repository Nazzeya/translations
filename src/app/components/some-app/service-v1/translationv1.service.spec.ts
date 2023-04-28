import { TestBed } from '@angular/core/testing';

import { Translationv1Service } from './translationv1.service';

describe('Translationv1Service', () => {
  let service: Translationv1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Translationv1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
