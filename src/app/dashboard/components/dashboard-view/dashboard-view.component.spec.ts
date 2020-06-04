import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewComponent } from './dashboard-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardViewComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports :[ ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ DashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
