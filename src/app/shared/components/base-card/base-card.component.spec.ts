import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardComponent } from './base-card.component';

fdescribe('base-card', () => {
  let component: BaseCardComponent;
  let fixture: ComponentFixture<BaseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
