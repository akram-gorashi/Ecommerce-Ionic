import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobilePage } from './add-mobile.page';

describe('AddMobilePage', () => {
  let component: AddMobilePage;
  let fixture: ComponentFixture<AddMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
