import { TestBed, inject } from '@angular/core/testing';

import { GameBaseService } from './game-base.service';

describe('GameBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameBaseService]
    });
  });

  it('should be created', inject([GameBaseService], (service: GameBaseService) => {
    expect(service).toBeTruthy();
  }));
});
