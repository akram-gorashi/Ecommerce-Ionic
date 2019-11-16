import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElecPage } from './add-elec.page';

describe('AddElecPage', () => {
  let component: AddElecPage;
  let fixture: ComponentFixture<AddElecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
