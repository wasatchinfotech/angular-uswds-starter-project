import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AccountGuard } from './account.guard';
import { HttpClient } from '@angular/common/http'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountGuard', () => {
  let guard: AccountGuard;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[ RouterTestingModule, HttpClientTestingModule]});
    guard = TestBed.inject(AccountGuard);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
