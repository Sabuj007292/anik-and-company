/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SolarProjectsComponent } from './solar-projects.component';

describe('SolarProjectsComponent', () => {
  let component: SolarProjectsComponent;
  let fixture: ComponentFixture<SolarProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
