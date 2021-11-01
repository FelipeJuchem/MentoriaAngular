import { TestBed } from '@angular/core/testing';

import { MentoriaListaService } from './mentoria-lista.service';

describe('MentoriaListaService', () => {
  let service: MentoriaListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentoriaListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
