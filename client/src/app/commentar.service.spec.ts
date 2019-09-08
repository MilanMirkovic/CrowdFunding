import { TestBed } from '@angular/core/testing';

import { CommentarService } from './service/commentar.service';

describe('CommentarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentarService = TestBed.get(CommentarService);
    expect(service).toBeTruthy();
  });
});
