/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { On_grid_solarComponent } from './on_grid_solar.component';

describe('On_grid_solarComponent', () => {
  let component: On_grid_solarComponent;
  let fixture: ComponentFixture<On_grid_solarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ On_grid_solarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(On_grid_solarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
