import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecPage } from './elec.page';

describe('ElecPage', () => {
  let component: ElecPage;
  let fixture: ComponentFixture<ElecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
