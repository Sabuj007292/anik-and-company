/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RooftopSolarComponent } from './rooftop-solar.component';

describe('RooftopSolarComponent', () => {
  let component: RooftopSolarComponent;
  let fixture: ComponentFixture<RooftopSolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooftopSolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RooftopSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
