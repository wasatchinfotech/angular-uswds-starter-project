import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUsernameComponent } from './forgot-username.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ForgotUsernameComponent', () => {
  let component: ForgotUsernameComponent;
  let fixture: ComponentFixture<ForgotUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[ ReactiveFormsModule, FormsModule],
      declarations: [ ForgotUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
