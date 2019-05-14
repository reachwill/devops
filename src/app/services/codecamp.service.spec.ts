import { TestBed } from '@angular/core/testing';

import { CodecampService } from './codecamp.service';

describe('CodecampService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodecampService = TestBed.get(CodecampService);
    expect(service).toBeTruthy();
  });
});
