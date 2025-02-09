import { TestBed } from '@angular/core/testing';

import { TvshowsDataService } from './tvshows-data.service';

describe('TvshowsDataService', () => {
  let service: TvshowsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
