import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesPage } from './mobiles.page';

describe('MobilesPage', () => {
  let component: MobilesPage;
  let fixture: ComponentFixture<MobilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
