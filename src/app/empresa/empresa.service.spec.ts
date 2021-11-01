import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: EmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmpresaService
      ],
      imports: [
        HttpClientModule
      ]

    });
    service = TestBed.inject(EmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
