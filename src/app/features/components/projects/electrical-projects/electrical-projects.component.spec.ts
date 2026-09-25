/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElectricalProjectsComponent } from './electrical-projects.component';

describe('ElectricalProjectsComponent', () => {
  let component: ElectricalProjectsComponent;
  let fixture: ComponentFixture<ElectricalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
