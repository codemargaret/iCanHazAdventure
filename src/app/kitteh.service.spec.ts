import { TestBed, inject } from '@angular/core/testing';

import { KittehService } from './kitteh.service';

describe('KittehService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KittehService]
    });
  });

  it('should ...', inject([KittehService], (service: KittehService) => {
    expect(service).toBeTruthy();
  }));
});
