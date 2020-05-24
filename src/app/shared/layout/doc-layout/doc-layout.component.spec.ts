import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLayoutComponent } from './doc-layout.component';

describe('DocLayoutComponent', () => {
  let component: DocLayoutComponent;
  let fixture: ComponentFixture<DocLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
