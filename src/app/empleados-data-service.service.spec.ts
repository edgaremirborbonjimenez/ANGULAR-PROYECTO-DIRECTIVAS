import { TestBed } from '@angular/core/testing';

import { EmpleadosDataServiceService } from './empleados-data-service.service';

describe('EmpleadosDataServiceService', () => {
  let service: EmpleadosDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
