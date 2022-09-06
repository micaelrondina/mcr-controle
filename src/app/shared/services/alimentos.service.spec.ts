/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlimentosService } from './alimentos.service';

describe('Service: Alimentos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimentosService]
    });
  });

  it('should ...', inject([AlimentosService], (service: AlimentosService) => {
    expect(service).toBeTruthy();
  }));
});
